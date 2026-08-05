import { expect, test } from '@playwright/test';

const routes = ['/', '/meridian-riverside', '/golden-state-sacramento', '/apex-bakersfield'];

const apps = [
  { name: 'apex', baseURL: 'http://127.0.0.1:3101', preview: 'variant-b-apex.html', signature: 'First try.' },
  { name: 'atelier', baseURL: 'http://127.0.0.1:3102', preview: 'variant-c-atelier.html', signature: 'One instructor' },
  { name: 'cockpit', baseURL: 'http://127.0.0.1:3103', preview: 'variant-d-cockpit.html', signature: 'under two minutes.' },
  { name: 'safe-route', baseURL: 'http://127.0.0.1:3104', preview: 'variant-a-safe-route.html', signature: 'From permit to licensed driver' },
];

for (const app of apps) {
  test(`${app.name} serves only its restored preview on approved routes`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });

    for (const route of routes) {
      const response = await page.goto(`${app.baseURL}${route}`, { waitUntil: 'domcontentloaded' });
      expect(response?.status(), `${app.name} ${route}`).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('data-restored-from', app.preview);
      await expect(page.locator('body')).toContainText(app.signature);
    }

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);

    const photos = page.locator('img[src^="images/"]');
    for (let index = 0; index < await photos.count(); index += 1) {
      await expect.poll(() => photos.nth(index).evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);
    }

    if (app.name === 'cockpit') {
      await page.locator('.opt').first().click();
      await expect(page.locator('#nextBtn')).toBeEnabled();
    }

    expect(consoleErrors).toEqual([]);

    const unknown = await page.goto(`${app.baseURL}/unknown-driving-school`, { waitUntil: 'domcontentloaded' });
    expect(unknown?.status()).toBe(404);
  });
}

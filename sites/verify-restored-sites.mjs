import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';

const outputRoot = path.resolve(import.meta.dirname, '..', '.artifacts', 'restored-sites');
await mkdir(outputRoot, { recursive: true });

const allSites = [
  { name: 'safe-route', url: 'http://127.0.0.1:3101/', alias: 'http://127.0.0.1:3101/meridian-riverside', signature: 'From permit to licensed driver' },
  { name: 'apex', url: 'http://127.0.0.1:3102/', alias: 'http://127.0.0.1:3102/apex-bakersfield', signature: 'FIRST TRY.' },
  { name: 'atelier', url: 'http://127.0.0.1:3103/', alias: 'http://127.0.0.1:3103/golden-state-sacramento', signature: 'One instructor' },
  { name: 'cockpit', url: 'http://127.0.0.1:3104/', signature: 'under two minutes.' },
];
const requestedSite = process.argv[2];
const sites = requestedSite ? allSites.filter((site) => site.name === requestedSite) : allSites;

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 1000 },
];

const browser = await chromium.launch();
const failures = [];

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
  for (const site of sites) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });

    try {
      console.log(`CHECK ${site.name}/${viewport.name}: navigate`);
      const response = await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 15_000 });
      await page.waitForTimeout(500);
      console.log(`CHECK ${site.name}/${viewport.name}: content`);
      if (!response?.ok()) failures.push(`${site.name}/${viewport.name}: HTTP ${response?.status()}`);
      if (!(await page.locator('body').innerText()).includes(site.signature)) {
        failures.push(`${site.name}/${viewport.name}: missing original signature`);
      }
      if (site.alias) {
        const aliasResponse = await context.request.get(site.alias);
        if (!aliasResponse.ok() || !(await aliasResponse.text()).includes('data-restored-from=')) {
          failures.push(`${site.name}/${viewport.name}: named route did not serve restored preview`);
        }
      }

      if (site.name === 'cockpit') {
        console.log(`CHECK ${site.name}/${viewport.name}: booking`);
        await page.locator('.opt').first().click({ timeout: 5_000, force: true, noWaitAfter: true });
        if (await page.locator('#nextBtn').isDisabled()) failures.push(`cockpit/${viewport.name}: booking selection did not enable Continue`);
      }

      await page.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important}' });
      console.log(`CHECK ${site.name}/${viewport.name}: scroll`);
      await page.evaluate(async () => {
        const pageHeight = document.documentElement.scrollHeight;
        for (let y = 0; y < pageHeight; y += window.innerHeight * 0.75) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
        window.scrollTo(0, 0);
      });

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      console.log(`CHECK ${site.name}/${viewport.name}: photos`);
      if (overflow > 1) failures.push(`${site.name}/${viewport.name}: horizontal overflow ${overflow}px`);

      const photos = page.locator('img[src^="images/"]');
      for (let index = 0; index < await photos.count(); index += 1) {
        const loaded = await photos.nth(index).evaluate((image) => image.complete && image.naturalWidth > 0);
        if (!loaded) failures.push(`${site.name}/${viewport.name}: photo ${index + 1} did not load`);
      }

      if (consoleErrors.length) failures.push(`${site.name}/${viewport.name}: console errors: ${consoleErrors.join(' | ')}`);
      console.log(`CHECK ${site.name}/${viewport.name}: screenshot`);
      await page.screenshot({ path: path.join(outputRoot, `${site.name}-${viewport.name}.png`), fullPage: true, animations: 'disabled' });
      console.log(`PASS ${site.name}/${viewport.name}`);
    } catch (error) {
      failures.push(`${site.name}/${viewport.name}: ${error.message}`);
    } finally {
      await page.close();
    }
  }
  await context.close();
}

await browser.close();

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('All restored-site checks passed.');
}

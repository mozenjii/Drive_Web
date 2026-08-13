import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const restoredLogos = [
  {
    client: 'safety-first-driving-school',
    dataFile: 'safety-first-driving-school.ts',
  },
  {
    client: 'bills-driving-school',
    dataFile: 'bills-driving-school.ts',
  },
];

describe('restored client logos', () => {
  it('ships optimized, non-destructive logo restorations and wires them into client data', () => {
    for (const { client, dataFile } of restoredLogos) {
      const relativeLogo = `/clients/${client}/logo-restored.png`;
      const logoPath = join(process.cwd(), 'public', relativeLogo);
      const clientSource = readFileSync(join(process.cwd(), 'src', 'data', 'clients', dataFile), 'utf8');

      expect(existsSync(logoPath), `${relativeLogo} should exist`).toBe(true);
      expect(statSync(logoPath).size, `${relativeLogo} should be web-sized`).toBeLessThan(500_000);
      expect(clientSource).toContain(`logo: '${relativeLogo}'`);
    }
  });
});

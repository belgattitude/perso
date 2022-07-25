import { test, expect } from '@playwright/test';

test.describe('Meet page', () => {
  test('should have the title in english by default', async ({ page }) => {
    const room = '1234567890-abc';
    await page.goto(`/meet/${room}`);
    const title = await page.title();
    expect(title.toLowerCase()).toContain('meet');
  });
});

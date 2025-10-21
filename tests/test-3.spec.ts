import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click();
  await page.locator('body').dblclick();
  await page.goto('chrome-error://chromewebdata/');
});
import { test, expect } from '@playwright/test';
 
test.describe('Contact Form - 4 Locator Methods for Each Field', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/locator_big.html');
    //await page.pause();
 
  });
 
  test('test', async ({ page }) => {
  await page.locator('[data-testid="edit-2"]').click();
  page.on('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('[data-testid="modal-confirm"]').click();
  await page.locator('[data-testid="delete-1"]').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('[data-testid="modal-confirm"]').click();
  await page.locator('[data-testid="btn-add-sample"]').click();
  await page.locator('[data-testid="row-checkbox-5"]').check();
  await page.getByRole('cell').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('cell').filter({ hasText: /^$/ }).nth(2).click();
  const downloadPromise = page.waitForEvent('download');
  await page.locator('[data-testid="nav-download"]').click();
  const download = await downloadPromise;
});
 
test('Email-xpath',async({page}) =>
{
 
});
 
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'SIGN IN' }).click();
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.locator('div').filter({ hasText: /^New Product$/ }).getByRole('link').click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Product');
  await page.locator('div').filter({ hasText: /^Disabled$/ }).click();
  await page.getByText('Not visible').click();
  await page.locator('select[name="attributes[0][value]"]').selectOption('1');
  await page.locator('select[name="attributes[1][value]"]').selectOption('4');
});
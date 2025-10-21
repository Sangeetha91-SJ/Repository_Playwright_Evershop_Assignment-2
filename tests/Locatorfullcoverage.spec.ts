import { test, expect } from '@playwright/test';
 
test.describe('Playwright Locator Training — Full Coverage', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/locatorbasic.html');
  });
 
 
  // 1. Role locator
  test('Locate by Role', async ({ page }) => {
    await page.getByRole('button', { name: 'Click e' }).click();
    await page.getByRole('link', { name: 'Playwright Docs' }).click();
  });
 
  // 2. Text locator
  test('Locate by Text', async ({ page }) => {
    await expect(page.getByText('sample paragraph')).toBeVisible();
  });
 
  // 3. Label locator
  test('Locate by Label', async ({ page }) => {
    await page.getByLabel('Username:').fill('JohnDoe');
  });
 
  // 4. Placeholder locator
  test('Locate by Placeholder', async ({ page }) => {
    await page.getByPlaceholder('Enter your email').fill('test@example.com');
  });
 
  // 5. Alt text locator
  test('Locate by Alt Text', async ({ page }) => {
    await expect(page.getByAltText('Sample Image')).toBeVisible();
  });
 
  // 6. Title locator
  test('Locate by Title', async ({ page }) => {
    await expect(page.getByTitle('Hover text here')).toBeVisible();
  });
 
  // 7. Test ID locator
  test('Locate by Test ID', async ({ page }) => {
    await expect(page.getByTestId('greeting')).toHaveText('Hello Test ID');
  });
 
  // 8. CSS selector
  test('Locate using CSS selector', async ({ page }) => {
    await page.locator('.submit-btn').click();
  });
 
  // 9. XPath selector
  test('Locate using XPath selector', async ({ page }) => {
    await page.locator('//button[text()="Submit via XPath"]').click();
  });
 
  // 10. Chained locator
  test('Chained locator example', async ({ page }) => {
    await page.locator('form').locator('input[name="firstName"]').fill('John');
  });
 
  // 11. Nth element locator
  test('Nth locator example', async ({ page }) => {
    await page.locator('button').nth(1).click(); // Clicks 'Second Button'
  });
 
  // 12. Filter locator
  test('Filter locator example', async ({ page }) => {
    await page.locator('div').filter({ hasText: 'Special Item' }).click();
  });
 
  // 13. Has locator
  test('Has locator example', async ({ page }) => {
    await page.locator('li', { has: page.locator('text=Item B') }).click();
  });
 
});
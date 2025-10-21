import { test, expect } from '@playwright/test';
 
test.describe('Contact Form - 4 Locator Methods for Each Field', () => {
 
  test.beforeEach(async ({ page }) => {
    
    await page.goto('https://evershop.io/contact-us');
    await page.pause();  
    //await expect(page.getByText('Let Us Help You Succeed -')).toBeVisible();
  });
 
 
 
  test.only('test- recorded test', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).type('satyam.bharti567@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your name' }).click();
  await page.getByRole('textbox', { name: 'Enter your name' }).fill('tester');
  await page.getByRole('textbox', { name: 'Enter your message' }).click();
  await page.getByRole('textbox', { name: 'Enter your message' }).fill('test record');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Sorry! There was an error.')).toBeVisible();
});
});
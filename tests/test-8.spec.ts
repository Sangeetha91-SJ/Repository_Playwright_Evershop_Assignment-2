
await page.locator('#urlKey').click();
await page.locator('#urlKey').fill('tested');
await page.locator('#metaTitle').click();
await page.locator('#metaKeywords').click();
await page.getByRole('textbox', { name: 'Meta description' }).click();

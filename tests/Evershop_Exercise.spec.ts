
import { test, expect } from "@playwright/test";

test.describe("Evershop Exercise", () => {

 test("Create a New Product", async ({ page }) => {

    await page.goto('http://localhost:3000/admin/login');
    await page.getByRole('textbox', { name: 'email' }).click();
    await page.getByRole('textbox', { name: 'email' }).fill('admin@admin.com');
    await page.getByRole('textbox',{name : 'Password'}).click();
    await page.getByRole('textbox',{name : 'Password'}).fill('admin123');
    await page.getByRole('button', {name : 'SIGN IN'}).click();
    
    await page.getByRole('link', {name : 'Products', exact : true}).click();
    await page.getByRole('link', { name: 'New Product' }).nth(1).click();
    //await page.getByRole('link', { name: 'New Product'}).click();
    //await page.getByRole('link', { name: /new product/i }).click();
    //await page.locator('div').filter({ hasText: /^New Product$/ }).getByRole('link').click();   


    await page.getByRole('textbox',{name : 'name'}).click();
    await page.getByRole('textbox',{name : 'name'}).fill('Testing Product');
     await page.getByRole('textbox',{name : 'sku'}).click();
    await page.getByRole('textbox',{name : 'sku'}).fill('Test');
    await page.getByRole('textbox',{name : 'price'}).fill('10000');
    await page.getByRole('textbox',{name : 'weight'}).fill('15');
    await page.getByRole('link', { name: 'Select category' }).click();
   await page.getByRole('button',{name : 'Select'}).nth(1).click();
    await page.locator('#tax_class').selectOption('Taxable Goods');
    await page.getByText('Disabled').check();
    await page.getByText('Not Visible').check();
    await page.getByRole('textbox', {name :'Quantity'}).click();
    await page.getByRole('textbox', {name :'Quantity'}).fill('20');
    await page.locator('#urlKey').click();
    await page.locator('#urlKey').fill('testurl');
    await page.locator('#metaTitle').fill('Title');
    await page.locator('#metaKeywords').fill('Keyword');
    await page.getByRole('textbox', {name :'meta_description'}).click();
    await page.getByRole('textbox', {name :'meta_description'}).fill('meta description');


   
  await page.locator ("select[id='attributes[0][value]']").selectOption ('1');
  await page.locator ("select[id='attributes[1][value]']").selectOption ('4');
   

  //const filePath1 = path.join(__dirname, 'Cartoon.png');
  //const Syspath = path.join(__dirname, 'C:\Users\SangeethaJagannathan\Desktop\Cartoon.png');

  const fileinput=page.locator('#images input[type="file"]');
  const filePath = 'C:\\Users\\SangeethaJagannathan\\Desktop\\Cartoon.png';
  await fileinput.setInputFiles(filePath);

  await page.screenshot({ path: 'after-upload1.png', fullPage: true });
  await page.getByText('Save').click();
  await page.screenshot({ path: 'after-upload2.png', fullPage: true });


  

  })
})
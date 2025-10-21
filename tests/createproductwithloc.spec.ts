
import { test, expect } from "@playwright/test";
import { ENV } from "./utils/env";
import { applocators, getLocator } from "./locators/subscription.locator";
import testData from "./data/testData.json";

test.describe("Evershop Exercise", () => {

 test("Create a New Product", async ({ page }) => {
    //Login to admin url
    await page.goto(ENV.adminURL);
    await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
    await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
    await getLocator(page, applocators.adminSigninButton).click();
    
    
    //Creating product 
    await getLocator(page, applocators.product).click();
    await getLocator(page, applocators.new_product).nth(1).click();
    await getLocator(page, applocators.productname).click();
    await getLocator(page, applocators.productname).fill('Testing Product');
    await getLocator(page, applocators.sku).click();
    await getLocator(page, applocators.sku).fill('Test');
    await getLocator(page, applocators.price).fill('10000');
    await getLocator(page, applocators.weight).fill('15');
    await getLocator(page, applocators.category).click();
    await getLocator(page, applocators.women).nth(1).click();
    await getLocator(page, applocators.tax).selectOption('Taxable Goods');
    await getLocator(page, applocators.Enabled).check();
    await getLocator(page, applocators.not_visible).check();
    await getLocator(page, applocators.quantity).fill('20');
    await getLocator(page, applocators.url).fill('testurl');
    await getLocator(page, applocators.meta).fill('meta');
    await getLocator(page, applocators.metakey).fill('metakey');
    await getLocator(page, applocators.metadesc).fill('metadesc');
    
   
  await page.locator ("select[id='attributes[0][value]']").selectOption ('1');
  await page.locator ("select[id='attributes[1][value]']").selectOption ('4');
   

  //const filePath1 = path.join(__dirname, 'Cartoon.png');
  //const Syspath = path.join(__dirname, 'C:\Users\SangeethaJagannathan\Desktop\Cartoon.png');

  const fileinput=page.locator('#images input[type="file"]');
  const filePath = 'C:\\Users\\SangeethaJagannathan\\Desktop\\Cartoon.png';
  await fileinput.setInputFiles(filePath);
  await getLocator(page, applocators.save).click();
  await page.screenshot({ path: 'after-upload2.png', fullPage: true });
  })

  
})

import { test, expect } from "@playwright/test";
import * as helper from "./utils/helper.ts";

test.describe("Evershop Exercise", () => {

 test("Create a New Product", async ({ page }) => {

    
     await page.goto('http://localhost:3000/admin');
    await page.getByRole('textbox', { name: 'email' }).click();
    await page.getByRole('textbox', { name: 'email' }).fill('admin@admin.com');
    await page.getByRole('textbox',{name : 'Password'}).click();
    await page.getByRole('textbox',{name : 'Password'}).fill('admin123');
    await page.getByRole('button', {name : 'SIGN IN'}).click();

    await page.getByRole('link',{name: 'Coupons'}).click();
    await page.getByRole('link',{name: 'New Coupon'}).nth(1).click();
    await page.getByRole('textbox', { name: 'coupon' }).fill("Test2");
    
    await page.getByRole('textbox', { name: 'description' }).fill("Test2");
    await page.getByRole('textbox', { name: 'Discount amount' }).fill("500");
   
     await page.getByRole('textbox', { name: 'Start date' }).click();
     await helper.selectdate(page, 0,true);
     await page.getByRole('textbox', { name: 'End date' }).click();
    await helper.selectdate(page, 10,false);
    await page.locator('text=Fixed discount to entire order').click();
     await page.getByRole('textbox', {name: 'Enter minimum purchase amount'}).fill("2000");
         await page.getByRole('textbox', { name: 'Enter minimum purchase qty' }).fill("2");
         await page.getByRole('textbox', {name : 'Enter customer emails'}).fill('sangeetha91@gmail.com');
         await page.getByRole('textbox', {name : 'Enter purchased amount'}).fill('10000');
         await page.getByRole('button', {name : 'Save'}).click();
         await page.getByRole('alert', {name : 'Coupon saved successfully!'}).click();



 })
})
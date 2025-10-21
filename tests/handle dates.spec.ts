import { test, expect, Page } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";
 
test("search data ", async ({ page }) => {
 
    //login as admin
    await page.goto(ENV.adminURL);
    await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
    await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
    await getLocator(page, applocators.adminSigninButton).click();
    await getLocator(page, applocators.customersLink).click();
    await helper.findRecordAndClick(page, 'sjkfbnkfbjkfsi28@yahoo.in');
 
});
 
test.only("handle dates", async ({ page }) => {
 
    //login as admin
    await page.goto(ENV.adminURL);
    await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
    await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
    await getLocator(page, applocators.adminSigninButton).click();
 
    // click on the new coupon
    await getLocator(page, applocators.coupon).click();
    await applocators.newCouponLink(page).click();
    await page.getByRole('textbox', { name: 'Start date' }).click();
    await helper.selectdate(page, 20,true);
    await page.getByRole('textbox', { name: 'End date' }).click();
    await helper.selectdate(page, 25,false);
    await page.pause();
 
});
 
 
 
 
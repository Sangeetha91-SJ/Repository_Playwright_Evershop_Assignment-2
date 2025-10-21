    import { test, expect, Page } from "@playwright/test";
    import { getLocator, applocators } from "./locators/subscription.locator.ts";
    import testData from "./data/testData.json";
    import * as helper from "./utils/helper.ts";
    import { ENV } from "./utils/env.ts";
    import { error } from "console";
 
    test.beforeEach(async({page})=>
    {
        await page.goto(ENV.adminURL);
        await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
        await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
        await getLocator(page, applocators.adminSigninButton).click();
    });
    
    test("search data ", async ({ page }) => {
        await getLocator(page, applocators.customersLink).click();
        await helper.findRecordAndClick(page, 'satyam.bharti28@yhaoo.in');
    });
 
    test.only("handle dates", async ({ page }) => {
 
        // click on the new coupon
        await getLocator(page, SubscriptionLocators.coupon).click();
        await SubscriptionLocators.newCouponLink(page).click();
        await page.getByRole('textbox', { name: 'Start date' }).click();
        await helper.selectdate(page, 20,true);
        await page.getByRole('textbox', { name: 'End date' }).click();
        await helper.selectdate(page, 25,false);
        await page.pause();
 
    });
 
 
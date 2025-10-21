import { test, expect, Page, chromium } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";
import path, { dirname } from "path";
 
 
    test.beforeEach(async({page})=>
    {
        await page.goto(ENV.adminURL);
        await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
        await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
        await getLocator(page, applocators.adminSigninButton).click();
    });
 
 
 
    test.describe("Subscription Flow", () => {
 
        test("Create a new product", async ({ page}) => {
 
 
 
        });
    });
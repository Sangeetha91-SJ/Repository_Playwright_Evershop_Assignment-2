import { test, expect, Page, chromium } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";
 
 
 
 
test("Handle By Pages and context gracefully", async ({ page, context }) => {
 
  // Login As admin
  await page.goto(ENV.adminURL);
  await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
  await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
  await getLocator(page, applocators.adminSigninButton).click();
  // click on product
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  page.getByRole('link', { name: 'Playwright-update' }).click();
 
  });
 
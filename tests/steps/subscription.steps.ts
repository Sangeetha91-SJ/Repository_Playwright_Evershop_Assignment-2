import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { BasePage } from "../../pages/BasePage";

import { SignupPage } from "../../pages/SignupPage";


import { generateRandomEmail } from "../utils/helper";
import { ENV } from "../utils/env";
 
 
let browser: Browser;
let page: Page;
let signupPage: SignupPage;
//let adminPage: Adminpage;
 
Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
});
 
After(async function () {
  await browser.close();
});
 
Given("I open the signup page", async function () {
  signupPage = new SignupPage(page);
  await signupPage.navigate(ENV.baseURL);
});
 
When(
  "I register with name {string}, email {string}, and password {string}",
  async function (name: string, email: string, password: string) {
    const randomEmail = generateRandomEmail(email);
    await signupPage.openSignupForm();
    await signupPage.registerUser(name, randomEmail, password);
  }
);
 
Then("I should be redirected to the homepage", async function () {
  await signupPage.assertURL (`${ENV.baseURL}`);
    
});
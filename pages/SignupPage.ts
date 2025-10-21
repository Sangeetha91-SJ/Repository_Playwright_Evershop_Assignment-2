//signuppage.ts

import { BasePage } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";
import { applocators, getLocator } from "../tests/locators/subscription.locator";

export class SignupPage extends BasePage{


    async openSignupForm()
    {
     await this.locate(applocators.navSignup).nth(1).click();
           await expect(this.locate(applocators.linkCreateAccount)).toBeEnabled();
           await this.locate(applocators.linkCreateAccount).click();
           
    }

    async registerUser(name:string, Email: string, Password : string)
    {
     await this.locate( applocators.fullNameInput).fill(name);
      await this.locate(applocators.emailInput).fill(Email);
      await this.locate(applocators.passwordInput).fill(Password);
      await this.locate( applocators.signupButton).click();
      
    }
}
//Adminpage.ts

import { BasesPages } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";
import { applocators, getLocator } from "../tests/locators/subscription.locator";
import { SignupPage } from "./SignupPage";

export class Adminpage extends SignupPage{


    async loginAdmin(email: string, password: string)
    {
     await this.locate(applocators.adminEmailInput).fill(email);
      await this.locate(applocators.adminPasswordInput).fill(password);
      await this.locate(applocators.adminSigninButton).click();
    }

  
}
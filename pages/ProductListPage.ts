//Adminpage.ts

//import { BasesPages } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";
import { applocators, getLocator } from "../tests/locators/subscription.locator";
import { SignupPage } from "./SignupPage";
import { Adminpage } from "./AdminPage";

export class ProductListPage extends Adminpage{

   readonly page: Page;

   constructor(page: Page) {
    super(page);
    this.page = page;

  }
    
     async openProductsPage(){
        await this.locate(applocators.product).click();
        
     }
     

      async updateProductName(name:string)

    {
      
     const inputLocator = this.page.locator('#name');
    
    await inputLocator.fill(name);
    console.log(`Product updated successfully. Updated Product name: ${name}`)
         
    }

     async updateProductImage()

    {
      const deleteIcon = this.page.locator('.feather-trash-2');
await deleteIcon.click();
        const fileinput=this.page.locator('#images input[type="file"]');
      const filePath = 'C:\\Users\\SangeethaJagannathan\\Desktop\\Playwright.png';
      await fileinput.setInputFiles(filePath);         
    }

    }






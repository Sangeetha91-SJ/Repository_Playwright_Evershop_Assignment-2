//Adminpage.ts

//import { BasesPages } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";
import { applocators, getLocator } from "../tests/locators/subscription.locator";
import { SignupPage } from "./SignupPage";
import { Adminpage } from "./AdminPage";

export class Productpage extends Adminpage{

   readonly page: Page;

   constructor(page: Page) {
    super(page);
    this.page = page;

  }
    async openProductCreationForm(){
        await this.locate(applocators.product).click();
        await this.locate(applocators.new_product).nth(1).click();

    }

     


    async fillGeneralDetails(name:string, sku: string, price: number, weight: number )
    {
         await this.locate(applocators.productname).fill(name);
         await this.locate(applocators.sku).fill(sku);
         await this.locate(applocators.price).fill(price.toString());
         await this.locate(applocators.weight).fill(weight.toString());
    }

     
    
     async ProductStatus(enabled: boolean)
    {
     if (enabled) 
    {
      await this.page.click(applocators.Enabled);
    } 
    else {
      await this.page.click(applocators.Disabled);
    }
   }
 

    async ProductpageSearchengineoptimize(URL: string, metaTitle: string, mkey: string, mdesc: string)
    {
      await this.locate(applocators.url).fill(URL);
      await this.locate(applocators.meta).fill(metaTitle);
      await this.locate(applocators.metakey).fill(mkey);
      await this.locate(applocators.metadesc).fill(mdesc);
    
    }

    async productDetails(color: string, size: string,qty: string)
    {
             await this.locate(applocators.quantity).fill(qty);
            await this.locate(applocators.newproductColor).selectOption('1');
             await this.locate(applocators.newproductize).selectOption('XL');
    }

    async productPic()
    {
      const fileinput=this.page.locator('#images input[type="file"]');
      const filePath = 'C:\\Users\\SangeethaJagannathan\\Desktop\\Cartoon.png';
      await fileinput.setInputFiles(filePath);
    }

    async saveProduct() 
    {
    await this.locate (applocators.save).click();
    }

    async verifySave()
    {
   const toast = this.page.getByRole('alert');
   await expect(toast).toHaveText('Product saved successfully!', { timeout: 10000 });
   const text = await toast.innerText();
   console.log('Alert text:', text);

    }

    }






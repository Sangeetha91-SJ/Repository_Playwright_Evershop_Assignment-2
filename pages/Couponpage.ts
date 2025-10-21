import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { applocators } from "../tests/locators/subscription.locator";
import * as helper from "../tests/utils/helper";
export class CouponPage extends BasePage {

 protected page: Page;
  constructor(page: Page){
    super(page);
    this.page=page;
  }
 
  async openNewCouponForm() {
    await this.locate(applocators.couppage).click();
    await this.locate (applocators.newcoupon).nth(1).click();
   
  }
 
  async fillcoupon(couponCode: string, description: string, discount: string) {
    await this.locate (applocators.couponCode).fill(couponCode);
    await this.locate(applocators.description).fill(description);
    await this.locate(applocators.discamt).fill(discount);
    //await this.locate(applocators.fixedDiscountOption).click();
  }
 
  async fillcustomercondition(minAmount: string, minQty: string) {
    await this.locate(applocators.minPuramt).fill(minAmount);
    await this.locate(applocators.minPurqty).fill(minQty);
  }
 
  async selectOptionValue() {
    await this.locate(applocators.dropdown).click();
    await this.locate(applocators.def).click();
  }
 
  async customerDetail(email: string, amount: string) {
    await this.locate(applocators.cusemail).fill(email);
    await this.locate(applocators.purchaseamt).fill(amount);
  }
 
async Dates(startdate:number, enddate:number) {
     await this.locate (applocators.startDate).click();
     await helper.selectdate(this.page,startdate);
     await this.locate (applocators.enddate).click();
     await helper.selectdate(this.page,enddate);

     
}

 async saveCoupon() {
  await this.locate(applocators.save).click();
 }


}

import { Page, expect, Locator } from "@playwright/test";
import { BasesPages } from "./BasePage";
import { getFormattedDate } from "../tests/utils/helper";
import { debug } from "console";
 
export class FlightBookingPage extends BasesPages 
{
  readonly page: Page;
 
  // Modal Locators
  readonly login: Locator;
  readonly mobile: Locator;
  readonly continue: Locator;
  readonly account: Locator;
  readonly close: Locator;
 
  // Flight booking locators
  readonly searchBtn: Locator;
 
  constructor(page: Page) {
    super(page);
    this.page = page;
 
    
    this.login = page.locator('section[data-cy="CommonModal_2"]');
    this.mobile = this.login.locator('input[data-cy="userName"]');
    this.continue = this.login.locator('button[data-cy="continueBtn"]');
    this.account = this.login.locator('ul[data-cy="LoginFlowPopup_82"] li');
    this.close = this.login.locator('span[data-cy="closeModal"]');
 
    
    this.searchBtn = page.getByText("Search");
  }

    async navigateflightbookingpage(url: string): Promise<void> {
    await this.page.goto(url);
  }
 
  
async enterMobileNumber(mobileNumber: string) {
  const modal = this.page.locator('section[data-cy="CommonModal_2"]');
  await modal.locator('input[data-cy="userName"]').fill(mobileNumber);
  await modal.locator('button[data-cy="continueBtn"]').click();
}
 
//Select Account type 
async selectAccount(accountType: string) {
  const modal = this.page.locator('section[data-cy="CommonModal_2"]');
  
  const normalized = accountType.toLowerCase().includes("personal") ? "personal" : "myBiz";
  await modal.locator(`ul[data-cy="LoginFlowPopup_82"] li[data-acctype="${normalized}"]`).click();
   if (normalized === "personal") {
    
    await modal.locator('span[data-cy="closeModal"]').click();
  } else {
   
    await this.page.mouse.click(0, 0); 
    await modal.waitFor({ state: "detached" });
  }
   
}
 
  // Select From city
  async selectFromCity( fromOption: string) {
    await this.page.locator(`input[data-cy="fromCity"]`).click();
    await this.page.getByRole("option", { name: fromOption }).click();
  }
 
  // Select To city
  async selectToCity( toOption: string) {
    await this.page.locator(`input[data-cy="toCity"]`).click();
    await this.page.getByRole("option", { name: toOption }).click();
  }
 
  // Select departure date
  async selectdeptDate(daysFromToday: number) {
    const dateLabel = getFormattedDate(daysFromToday);
    await this.page.getByRole("gridcell", { name: dateLabel }).click();
    await this.page.mouse.click(0, 0);
  }
 
  // Select return date
  async selectRetDate(daysFromToday: number) {
    const dateLabel = getFormattedDate(daysFromToday);
    await this.page.getByText("ReturnTap to add a return").click();
      await this.page.getByRole("gridcell", { name: dateLabel }).click();
  





        
  }
 
  
  async Faretype(fareType: string) {
    await this.page.getByText(fareType, { exact: true }).click();
   
  }
 
  
  async searchFlights() {
    await this.searchBtn.click();
    await expect(this.page).toHaveURL(/flight/);
  }
}
import { Page } from "@playwright/test";
import { error } from "console";
 
 
// Generate random email
export function generateRandomEmail(baseEmail: string): string {
 
  const part = baseEmail.split('@');
  const name = part[0];
  const domain = part[1];
  //const [name, domain] = baseEmail.split('@');
  return `${name}+${Date.now()}@${domain}`;
}
 
export async function findRecordAndClick(page: Page, recordtext: string) {
  while (true) {
    const rows = page.getByRole('row', { name: recordtext });
 
    if (await rows.count() > 0) {
      await rows.first().getByRole('link').click();
      break;
    }
    const nextButton = page.locator('.next');
    if (!(await nextButton.isVisible())) {
      throw new Error(`record not found`);
    }
    await nextButton.click();
    await page.waitForTimeout(1000);
  }
}
 
export function getFutureDate(daysForToday: number): { month: string; day: number } {
  const date = new Date();
  date.setDate(date.getDate() + daysForToday);
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.getDate();
  return { month, day };
}
 
export async function selectdate(page: Page, daysFromToday: number, isEndDate: boolean = false) : Promise<string> {
 
  const target = getFutureDate(daysFromToday);
  const targetlabel = `${target.month} ${target.day}`;
  //August 26
  console.log("@@@@@Debug@@@@@@@");
  console.log(target.month);
  console.log(target.day);
 
  const calendar = page.locator('.flatpickr-calendar.open');
  const nextBtn = isEndDate ? calendar.locator('.flatpickr-next-month').first() :
    page.locator('.flatpickr-next-month').nth(1);
 
  // const nextBtn = page.locator('.flatpickr-next-month').nth(1);
 
  const targetLocator = calendar.getByLabel(targetlabel);
  if (await targetLocator.count()) {
    await targetLocator.first().click();
    return "Text"; //added undefined --sangeetha
  }
  for (let i = 0; i < 12; i++) {
    await nextBtn.click();
    if (await targetLocator.count()) {
      await targetLocator.first().click();
      return "Text"; //added undefined --sangeetha
    }
  }
  throw new Error("date not found");
 
}


export function getFormattedDate(daysFromToday: number): string {
  const today = new Date();
  today.setDate(today.getDate() + daysFromToday);
 
  // Format as "Wed Sep 18"
  return today.toLocaleDateString("en-US", {
    weekday: "short",  // Mon, Tue, Wed
    month: "short",    // Jan, Feb, Mar
    day: "2-digit"     // 01, 02, 18
  }).replace(",", "");
}


export async function MatchandClick(page: Page, expectedProductName: string, columnIndex = 2) {

  const rows = await page.getByRole('row');
const count = await rows.count();
const productName= " ";



for (let i = 2; i < count; i++) { 
  
  const row = rows.nth(i);
  const productName = await row.getByRole('cell').nth(columnIndex).innerText(); 
  
 

  if (productName.trim() === expectedProductName) {
    // Click the product name link inside that cell
    await row.locator('td:nth-child(3) a').click();
    console.log(`Expected Product to update the name : ${expectedProductName}`);
    console.log(`Clicked on  Product : ${productName}`);
    
    //console.log("Product updated successfully")
    break;
  }
}
return productName;


}

export async function verifyAfterSave(page: Page, expectedProductName: string, columnIndex = 2) {

  const rows = await page.getByRole('row');
const count = await rows.count();
const productName= " ";



for (let i = 2; i < count; i++) { 
  //const rowcell=rows.nth(i);
       // const cellvalue=await rowcell.getByRole('cell').nth(1).innerText();
       // console.log(`Row ${i}:`,cellvalue);
  // Usually skip header row at index 0
  const row = rows.nth(i);
  const productName = await row.getByRole('cell').nth(columnIndex).innerText(); 
  
  //const cellvalue=await rowcell.getByRole('cell').nth(1).innerText(); // 3rd cell is product name

  if (productName.trim() === expectedProductName) {
    // Click the product name link inside that cell
    await row.locator('td:nth-child(3) a').click();
    console.log("Product created and displaying in the Product list");
    //console.log(`Clicked on  Product : ${productName}`);
    //console.log(`Expected Product : ${expectedProductName}`);
    break;
  }
}
return productName;


}
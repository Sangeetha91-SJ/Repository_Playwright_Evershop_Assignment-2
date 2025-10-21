import { test, expect, Page, chromium } from "@playwright/test";

test.only("Power of get by role", async ({ page }) => {
await page.goto('http://localhost:4000/locator.html');
 
 
 
// await page.fill('#courseInput','Playwright');
 
 
const optionsloc=await page.locator('#courses option').all();
 
 
for(const option of optionsloc)
{
 
  console.log(option);
 
}
 
const options: string []=[];
for (const opt of optionsloc)
{
   options.push(await opt.getAttribute("value") || " ");
}
 
console.log("alloption:",options);
 
const count=await options.count();
console.log(count);
console.log('*******');
for( let i=0;i<count;i++)
{
  console.log(await options.nth(i).getAttribute('value'));
}
const optionss=['Playwright','Selenium','Cypress','Manual Testing'];
const input= page.locator('#courseInput');
for(const option of optionss)
{
  await input.fill(option);
  await expect(input).toHaveValue(option);
  console.log(option);
 
}
await page.getByLabel('Active').nth(1).check();
await page.getByLabel('Inactive').check();
await page.getByLabel('Pending').check();
await page.getByLabel('Inactive').check();
await page.getByLabel('Pending').uncheck();
await page.getByLabel('Email Notifications').check();
await page.getByLabel('SMS Alerts').check();
await page.getByLabel('Push Notifications').check();
await page.getByLabel('Email Notifications').uncheck();
 
if(!(await page.getByLabel('Email Notifications').isChecked()))
{
  await page.getByLabel('Email Notifications').check({force:true});
}
 
await page.getByLabel('Department').selectOption("design");
await page.getByLabel('Department').selectOption({label:'Project Management'} );
await page.getByLabel('Department').selectOption({index:1});
await page.getByLabel('Department').click();
await page.selectOption( 'departmentSelect',['qa','dev']);
await page.getByLabel('Department').selectOption({index:1});
 
});
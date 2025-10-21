import {test,expect,Locator} from "@playwright/test"

test("verify page title" , async ({page})=>{

    await page.goto("http://www.automationpractice.pl/index.php");

    let title: string=await page.title();
    console.log("Title: ",title);
    await expect(page).toHaveTitle("My Shop");
    await expect(page.getByText("Custom Block")).toBeVisible();

    //1.getByAltText
    //(const logo: Locator=await page.getByAltText("nopCommerce demo store");
    //logo.click();
    //await expect(logo).toBeVisible;

    //2.getbyText

    
    





})
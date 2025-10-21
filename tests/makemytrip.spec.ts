
import { test, expect } from "@playwright/test";
import {  Flightbookingpage } from "../pages1/Flightbooking";

//test.describe("Make My trip Exercise", () => {

    test("Flight booking",async({page})=>
    {

     //await page.goto('https://www.makemytrip.com/');   
     //const model=page.locator('section[data-cy="CommonModal_2"]');

     //await model.getByPlaceholder('Enter Mobile Number').fill('123456789')
     //await model.locator('button[data-cy="continueBtn"]').click();

     //await page.mouse.click(0,0);
     //await model.waitFor({state: "detached"});

    const flightbooking =new Flightbookingpage(page);
    await flightbooking.navigate('https://www.makemytrip.com/');
    await flightbooking.selectAccount("personal",page);


    })

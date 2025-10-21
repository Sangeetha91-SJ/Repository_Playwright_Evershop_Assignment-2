import {test,expect} from '@playwright/test';
import path from 'path';
 
test.describe('playwrite satyam practice',()=> {
 
    const baseURL='http://localhost:3000/locators.html';
 
    test.beforeEach( async ({page})=> {
        await page.goto(baseURL);
    });
 
    //test1 :getByRole
    test('locator by Role',async ({page})=>{
 
       await expect(page.getByRole('heading',{name:'Playwright Locator Training'})).toBeVisible();
});
});
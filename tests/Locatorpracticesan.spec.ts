import {test,expect} from '@playwright/test'
import path from 'path'

test.describe('playwright Sangeetha Practice', ()=> {

    const baseURL='http://localhost:3000/locator_basic.html';

    test.beforeEach(async ({page})=>{
        await page.goto(baseURL);

    });

    //test1: getby role

    test('locator by Role', async ({page})=>{

        await expect(page.getByRole('heading', { name: 'Playwright Locator Playground' })).toBeVisible();
    
    })

})
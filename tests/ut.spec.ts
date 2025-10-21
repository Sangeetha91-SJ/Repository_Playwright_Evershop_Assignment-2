import {test,expect} from '@playwright/test';

test.describe('utube',()=> {


    test.beforeEach(async({page})=>{
        await page.goto('https://www.youtube.com/')
        //await page.pause();

    })

    //Role locator 

   

test('youtube search', async ({ page }) => {
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright videos');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.locator('a').filter({ hasText: 'videosPlay all' }).click();
  await page.getByRole('button', { name: 'Skip', exact: true }).click();
  await page.locator('video').click();
});
    })


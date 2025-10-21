import {test,expect} from '@playwright/test';

test.describe('Playwright Locator training full coverage',()=> {


    test.beforeEach(async({page})=>{
        await page.goto('http://localhost:3000/locators.html')

    })

    //Role locator 

    test('Locator by Role', async({  page })=> {
     await page.getByRole('button',{name: 'Click Me'}).click();
     await page.getByRole('link',{name : 'Playwright Docs'}).click();
        
    })

    //2. Text locator
    test('Locator by text',async({page})=>{

        await expect(page.getByText('sample paragraph')).toBeVisible();

    })

    //3. Locator by label

     test('Locator by Label', async({page})=>{

    await page.getByLabel('Username').fill('john');

    })

     //4. Locator by placeholder

     test('get by Placeholder', async({page})=>{
     
    await page.getByPlaceholder('Enter your email').fill('san@gmail.com');
     
      })

      //5. Locator by Alt text
    test('get by Alt text', async({page})=>{
     
    await expect(page.getByAltText('Sample Image')).toBeVisible();
     
      })

      
      //6. Locator by Title
    test('get by Title', async({page})=>{
     
    await expect(page.getByTitle('Hover text here')).toBeVisible();
     
      })


       //7. Locator by Test ID
    test('get by Test ID', async({page})=>{
     
    await expect(page.getByTestId('greeting')).toHaveText('Hello Test ID');
    await expect(page.getByTestId('greeting')).toHaveText('Hello Test ID');
     
      })


       //7. Locator by CSS Selector
    test('get by CSS', async({page})=>{
     
    await page.locator('.submit-btn').click();
     
      })

//7. Locator by xpath
       test('get by xpath', async({page})=>{
     
    await page.locator('//button[text()="Submit via XPath"]').click();
     
      })


      









})

    



 
import { Locator, expect, Page, test } from "@playwright/test";
//import { expect, Page } from '@playwright/test';
//import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
//import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env";
import {generateRandomEmail, MatchandClick} from "./utils/helper"
//import {clickProductByName} from "./utils/helper"
//import { MatchandClick } from "./utils/helper";

import {SignupPage} from "../pages/SignupPage"

import { Productpage } from "../pages/Productpage";
import { CouponPage } from "../pages/Couponpage";
import { Adminpage } from "../pages/AdminPage";
import { ProductListPage } from "../pages/ProductListPage";
 

 
test.describe("Subscription Flow for PM Demo", () => {

  test("Signup for new user", async ({ page }) => {

  const signupPage=new SignupPage(page);
  const randomEmail = generateRandomEmail(testData.user.email);
''
  //Test Steps
  //Open url
  await signupPage.navigate(ENV.baseURL);
  //Sign up form
  await signupPage.openSignupForm();
  await signupPage.registerUser(testData.user.name,randomEmail,testData.user.password);
  
  })

  // Admin Login
    test("Login as Admin", async ({page}) => {

      const adminpage=new Adminpage(page);
      await adminpage.navigate(ENV.adminURL);
      await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
    

  })

  test("Create Product", async ({page}) => {
    const productpage =new Productpage(page);
    console.log("Login to the Evershop application as Admin user");
    await productpage.navigate(ENV.adminURL);
    await productpage.loginAdmin(testData.admin.email,testData.admin.password);
    await productpage.openProductCreationForm();
    console.log("Product Creation");
    await productpage.fillGeneralDetails(testData.product.ProductName, testData.product.sku,parseInt(testData.product.price),parseInt(testData.product.weight ));
    await productpage.ProductStatus(true);
    await productpage.ProductpageSearchengineoptimize("URL_PR1","MetaTitle1","MetaKey1","MetaDescription1");
    await productpage.productDetails("White","XL","10");
    await productpage.productPic();
    await productpage.saveProduct();
    await productpage.verifySave();
    console.log("Product Created successfully");
    const createdProdcut=testData.product.ProductName
    //const selectproduct =  await 

  })


     test("Create Coupon", async ({page})=>

   {
  const coupon=new CouponPage (page);
  const adminpage=new Adminpage (page);
  
 
  await adminpage.navigate(ENV.adminURL);
  await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
  await coupon.openNewCouponForm();
  await coupon.fillcoupon(testData.coupon.couponCode, testData.coupon.description,testData.coupon.discount);
  await page.locator('text=Fixed discount to entire order').click();
  await coupon.fillcustomercondition(testData.coupon.minAmount, testData.coupon.minQyt);
 // await .click();
  await coupon.Dates(0, 10);
  await coupon.selectOptionValue();
  await coupon.customerDetail(testData.coupon.email, testData.coupon.amount);
  await coupon.saveCoupon();
  const productName: string = testData.product.ProductName;
  console.log(productName);



})



  test.only("Update Product name ", async ({page}) => {
    const product =new ProductListPage(page);
    const newproduct =new Productpage(page);
    await product.navigate(ENV.adminURL);
    await product.loginAdmin(testData.admin.email,testData.admin.password);
    await product.openProductsPage();
     
     const expectedProductName = testData.product.ProductName;
    await console.log("Expected Product Name: "+expectedProductName);


   const selectproduct =  await MatchandClick(page, expectedProductName,2);
   await product.updateProductName(testData.updateproduct.UpdatedName);
   await newproduct.saveProduct();
   await newproduct.verifySave();
   
  





    
    
   // await productpage.updateProductName(testData.product.ProductName);
    //await productpage.saveProduct();

})



    


  })




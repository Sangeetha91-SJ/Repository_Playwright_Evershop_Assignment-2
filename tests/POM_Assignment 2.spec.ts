 
import { Locator, expect, Page, test } from "@playwright/test";
import testData from "./data/testData.json";
//import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env";
import {generateRandomEmail, MatchandClick, verifyAfterSave} from "./utils/helper"
//import {clickProductByName} from "./utils/helper"
//import { MatchandClick } from "./utils/helper";

import {SignupPage} from "../pages/SignupPage"

import { Productpage } from "../pages/Productpage";
import { CouponPage } from "../pages/Couponpage";
import { Adminpage } from "../pages/AdminPage";
import { ProductListPage } from "../pages/ProductListPage";
import{ Client} from "pg";
import dotenv from "dotenv"

dotenv.config();
 

 
test.describe("CRUD flow for Evershop", () => {

 // test("Signup for new user", async ({ page }) => {

 // const signupPage=new SignupPage(page);
 // const randomEmail = generateRandomEmail(testData.user.email);
''
  //Test Steps
  //Open url
 // await signupPage.navigate(ENV.baseURL);
  //Sign up form
 // await signupPage.openSignupForm();
 // await signupPage.registerUser(testData.user.name,randomEmail,testData.user.password);
  
  })

  // Admin Login
   // test("Login as Admin", async ({page}) => {

     // const adminpage=new Adminpage(page);
      //await adminpage.navigate(ENV.adminURL);
      //await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
    

 // })

  test("Create Product", async ({page}) => {
    const productpage =new Productpage(page);
    await productpage.navigate(ENV.adminURL);
    await productpage.loginAdmin(testData.admin.email,testData.admin.password);
    await productpage.openProductCreationForm();
    await productpage.fillGeneralDetails(testData.product.ProductName, testData.product.sku,parseInt(testData.product.price),parseInt(testData.product.weight ));
    await productpage.ProductStatus(true);
    await productpage.ProductpageSearchengineoptimize("URL_PR4","MetaTitle4","MetaKey4","MetaDescription4");
    await productpage.productDetails("White","XL","10");
    await productpage.productPic();
    await productpage.saveProduct();
    await productpage.verifySave();
         const createdProdcut = testData.product.ProductName;
    await console.log("Created Product Name: " +createdProdcut);

    const addedProduct =  await verifyAfterSave(page, createdProdcut,2);
  })


  //   test("Create Coupon", async ({page})=>

   //{
  //const coupon=new CouponPage (page);
  //const adminpage=new Adminpage (page);
  
 
  //await adminpage.navigate(ENV.adminURL);
  //await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
  //await coupon.openNewCouponForm();
  //await coupon.fillcoupon(testData.coupon.couponCode, testData.coupon.description,testData.coupon.discount);
  //await page.locator('text=Fixed discount to entire order').click();
  //await coupon.fillcustomercondition(testData.coupon.minAmount, testData.coupon.minQyt);
 // await .click();
  //await coupon.Dates(0, 10);
  //await coupon.selectOptionValue();
  //await coupon.customerDetail(testData.coupon.email, testData.coupon.amount);
  //await coupon.saveCoupon();
  //const productName: string = testData.product.ProductName;
  //console.log(productName);



//})



  test("Update Product name ", async ({page}) => {
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


test("Update Product Image ", async ({page}) => {
    const product =new ProductListPage(page);
    const newproduct =new Productpage(page);
    await product.navigate(ENV.adminURL);
    await product.loginAdmin(testData.admin.email,testData.admin.password);
    await product.openProductsPage();
     
     const expectedProductName = testData.updateproduct.UpdatedName;
    await console.log("Expected Product Name: "+expectedProductName);


   const selectproduct =  await MatchandClick(page, expectedProductName,2);
   await product.updateProductImage();
   await newproduct.saveProduct();
   await newproduct.verifySave();
   
  





    
    
   // await productpage.updateProductName(testData.product.ProductName);
    //await productpage.saveProduct();

})

test("Database product count ", async ({page}) => {

  const client=new Client({
 
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSLMODE === "disable"? false:true,
})
 
await client.connect();
 
const result= await client.query(`SELECT  name
  FROM public.product_description;`);
 
const count= await client.query(`SELECT COUNT(*) FROM public.product_description;`);
 
console.log("product count:",count.rows[0].count);
 
const productname= result.rows.map(row=>row.name);
 
console.log(productname);
 





})




    







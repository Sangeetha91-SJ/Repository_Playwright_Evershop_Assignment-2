import { Locator, Page } from "@playwright/test";
 
type RoleLocator= {
  role : Parameters<Page["getByRole"]>[0];
  name?: string;
  exact?: boolean;
};
 
export const applocators = {
  // Navigation
  navSignup: ".self-center",
 
  // Signup
  linkCreateAccount: { role: "link" , name: "Create an account" } as RoleLocator,
  fullNameInput: { role: "textbox" as const, name: "Full Name" }as RoleLocator,
  emailInput: { role: "textbox" as const, name: "Email" }as RoleLocator,
  passwordInput: { role: "textbox" as const, name: "Password" }as RoleLocator,
  signupButton: { role: "button" as const, name: "SIGN UP" }as RoleLocator,
 
  // Admin login
  adminEmailInput: { role: "textbox" as const, name: "Email" }as RoleLocator,
  adminPasswordInput: { role: "textbox" as const, name: "Password" }as RoleLocator,
  adminSigninButton: { role: "button" as const, name: "SIGN IN" }as RoleLocator,
  nextButton:".next",
  coupon : {role:"link", name: "Coupons"} as RoleLocator,
  // Customers page
  customersLink: { role: "link" as const, name: "Customers" }as RoleLocator,
  customerStatus: "text=StatusEnabled",
  startDate: {role:"textbox", name: "Start date" }as RoleLocator,
  endDate: {role:"textbox", name: "End date" }as RoleLocator,
   newCouponLink: (page:Page) =>
   page.locator('div').filter({ hasText: /^New Coupon$/ }).getByRole('link'),

  //Create Product
  product : {role: "link" as const, name: "Products", exact: true} as RoleLocator,
  new_product : {role: "link" as const, name : "New Product"} as RoleLocator,
  productname : {role: "textbox" as const, name: "name"} as RoleLocator,
  sku : {role: "textbox" as const, name :"sku"} as RoleLocator,
  price : {role: "textbox" as const, name: "price"} as RoleLocator,
  weight : {role: "textbox" as const, name: "weight"} as RoleLocator,
  category : {role: "link" as const, name: "Select category"} as RoleLocator,
  women : {role: "button" as const, name: "Select"} as RoleLocator,
  tax : '#tax_class',
  Enabled : 'text=Enabled',
  Disabled : 'text=Enabled',
  not_visible : 'text=Not Visible',
  quantity : {role: "textbox" as const, name: "Quantity"} as RoleLocator,
  url : '#urlKey',
  meta : '#metaTitle',
  metakey : '#metaKeywords',
  metadesc : {role: "textbox" as const, name: "Meta description"} as RoleLocator,
  save : {role: "button" as const, name: "Save"}as RoleLocator,
   newproductColor: "select[id='attributes[0][value]']",
   newproductize: "select[id='attributes[1][value]']",

   
    //Coupon page 
    couppage: { role: "link" as const, name: "Coupons" }as RoleLocator,
      newcoupon: { role: "link" as const, name: "New Coupon" }as RoleLocator,
    couponCode:{role: "textbox",  name: "Enter coupon code" }as RoleLocator,
    description :{role:"textbox",  name: "Description" }as RoleLocator,
    discamt:{role:"textbox",  name: "Discount amount" }as RoleLocator,
    startdate:{role:'textbox', name: 'Start date'}as RoleLocator,
    enddate:{role:'textbox', name: 'End date'}as RoleLocator,
    minPuramt:{role:"textbox",  name: "Enter minimum purchase amount" }as RoleLocator,
    minPurqty :{role:"textbox", name: "Enter minimum purchase qty" }as RoleLocator,
    dropdown:(".css-1xc3v61-indicatorContainer"),
    def :{role:"option",  name: "Default" }as RoleLocator,
    cusemail:{role:"textbox",  name: "Enter customer emails" }as RoleLocator,
    purchaseamt:{role:"textbox", name: "Enter purchased amount" }as RoleLocator,
    savebtn:{ role: "button" as const, name: "Save" }as RoleLocator,
    confmessage:{role:"alert", name:"Coupon saved successfully!"}as RoleLocator,


// Dynamic data for random email
dynamicCustomerEmailCell: (email: string): RoleLocator => ({
  role: "cell",     
  name: email,
  exact: true,
}),
 };
 
export function getLocator(page: Page,locator:RoleLocator| string): Locator {
  if(typeof locator==="string")
  {
    return page.locator(locator);
  }
  const {role,name,exact}=locator;
  return page.getByRole(role,{name,exact});
}
 
 
//1. Evershop installation
//2. Folder structure of test case
//3. Testcase for
   //a. Table handle
   //b. pagination
   //c. Dates handle
   //d. multiple tabs and windows
   //e. File upload and system alert
 
//4. Writing locators.   
 
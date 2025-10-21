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
  //product : {name : 'Products', exact : true} as RoleLocator,
   newProductLink: {
    role: "link",
    name: "Products",
    exact: true,
    withinText: /^New Product$/, // 👈 Add it here
  },
 
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
 
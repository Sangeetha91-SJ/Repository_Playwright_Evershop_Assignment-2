test.only('Email-xpath for name',async({page}) =>
{
 
   const email= page.locator("//label[normalize-space(.)='Your Email']/following-sibling::input");
    const email2= page.locator("//div[label[normalize-space(.)='Your Email']]//input[@type='email']");
    const email3=page.getByPlaceholder('Enter your email');
    await email.click();
    await expect(email).toBeVisible();
 
 
});
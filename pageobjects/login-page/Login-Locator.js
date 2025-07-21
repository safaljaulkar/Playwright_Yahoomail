const { expect } = require('@playwright/test')

class LoginLocator{
constructor(page){
 this.page=page;

        this.textUsername = page.locator("//input[@id = 'login-username']");
        this.nextButton = page.locator("//input[@id = 'login-signin']");
        this.loginEmail=page.locator("//input[@id = 'login']");
        this.loginPassword =page.locator("//input[@id = 'password']");
        this.robotCheck =page.locator("//span/div[@class = 'recaptcha-checkbox-border']"); 
        this.signinButton=page.locator("//button[@id = 'btnLogin']");
        this.headerLogo =page.locator("//a[@id='ybar-logo' and contains(@href, 'yahoo.com')]");
        this.signOutButton =page.locator("//a[.//span[text()='Sign out']]");
         this.locSafaljProfileName = page.locator("//span[@role='presentation']");



}
}
module.exports = { LoginLocator };
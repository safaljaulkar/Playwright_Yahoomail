const { expect } = require('@playwright/test')
const { LoginLocator } = require('../login-page/Login-Locator');


class LoginAction {
    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(this.page);

    }

    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
    }

    //Action for login application
    async LoginToApplication(str_validUsername, str_validPassword) {
        await this.loginLocator.loginEmail.fill(str_validUsername);
        console.log("Entered Email is :" + str_validUsername);

        await this.loginLocator.loginPassword.fill(str_validPassword);
        console.log("Entered Email is :" + str_validPassword);

        await this.loginLocator.signinButton.click();
        console.log("Clicked on Login button.");

        await this.page.waitForTimeout(3000);  // Wait for 3 seconds
    }

    //Verify Login with invalid password  
    async verifyLoginWithInvalidPassword(locInvalidPasswordWarning) {
        const warningMessage = await this.loginLocator.locInvalidPasswordWarning;
        await expect(warningMessage).toBeVisible();
        await expect(warningMessage).toHaveText(locInvalidPasswordWarning);
        console.log("Verify warning message when valid username and invalid password.");
    }




    //Verify Login page UI
  //  async LoginPageUI() {
      //  await expect(this.loginLocator.locLoginPageLogo).toBeVisible();
       // await expect(this.loginLocator.locUserProfileLabel).toBeVisible();

       // console.log("Verified UI");





    }



    /*
        //Verify Logout Functionality Application
        async verifyLogoutFunctionality() {   ///expected 
         await this.loginLocator.signOutButton.click();
        const loginButtonText = await this.loginLocator.headingAfterLogout;
        await expect(loginButtonText).toBeVisible();
        console.log("Logout Successfully.");
    }
        */

module.exports = { LoginAction };
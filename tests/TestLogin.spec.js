import { test, expect } from '@playwright/test';

const { LoginAction } = require('../pageobjects/login-page/Login-Action');
const { LoginData } = require('../pageobjects/login-page/Login-Data');


test('@Safal Verify login functionality', async ({ page }) => {

  // Page Objects declaration
  const loginAction = new LoginAction(page);
  const loginData = new LoginData(page);


  // Verify Launch URL
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(loginData.appURL);

  })

  //Verify Login with correcct credentials
  await test.step('Verif login with correct username and password.', async () => {
    await loginAction.LoginToApplication(loginData.validUsername, loginData.validPassword);






    //await expect(this.positionLocator.locPositionHeading).toBeVisible();
    //await expect(page).toHaveURL('');
    //await loginAction.VerifyLoginWithCorrectUSernameAndPassword(loginData.)

  })





  /*
     Verify Logout Application
    await test.step('Verify Logout functionality.', async()=>{
    await expect(page).toHaveURL('https://mail.turbify.com/login?reason=USER_LOGOUT');
     })
  */

});
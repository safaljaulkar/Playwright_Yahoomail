import { test, expect } from '@playwright/test';


const { LoginAction } = require('../pageobjects/login-page/Login-Action');
const { LoginData } = require('../pageobjects/login-page/Login-Data');
const { ComposeAction } = require('../pageobjects/Compose-Page/Compose-Action');
const{ComposeData}=require('../pageobjects/Compose-Page/Compose-Data');


test('@Safal Verify Compose New Mail functionality', async ({ page }) => {

    // Page Objects declaration
    const loginAction = new LoginAction(page);
    const loginData = new LoginData(page);
    const composeAction = new ComposeAction(page);
    const composeData =new ComposeData(page);

    //const composeData =new ComposeData(page);

    // Verify Launch URL
    await test.step('Launch the application.', async () => {
        await loginAction.gotoURL(loginData.appURL);

    })

    // Verify Launch URL
    await test.step('Launch the application.', async () => {
        await loginAction.gotoURL(loginData.appURL);
        await loginAction.LoginToApplication(loginData.validUsername, loginData.validPassword);

    })

    //Verify Compose mail functionality
    await test.step('Compose Mail.', async () => {
        await composeAction.navigateToCompose(composeData.mailID, composeData.subject, composeData.draftMail);


    })

});
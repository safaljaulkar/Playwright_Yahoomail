import { test, expect } from '@playwright/test';

const { LoginAction } = require('../pageobjects/login-page/Login-Action');
const { LoginData } = require('../pageobjects/login-page/Login-Data');
const { SentAction } = require('../pageobjects/SentMail-Page/Sent-Action');
const { SentData } = require('../pageobjects/SentMail-Page/Sent-Data')

test('@Safal Verify Sent Mail functionality', async ({ page }) => {

    // Page Objects declaration
    const sentAction = new SentAction(page);
    const loginAction = new LoginAction(page);
    const loginData = new LoginData(page);
    const sentData = new SentData(page);


    // Verify Launch URL
    await test.step('Launch the application.', async () => {
        await loginAction.gotoURL(loginData.appURL);

    })

    // Verify Launch URL
    await test.step('Launch the application.', async () => {
        await loginAction.gotoURL(loginData.appURL);
        await loginAction.LoginToApplication(loginData.validUsername, loginData.validPassword);
    })

    //Verify Reply on Sent mail functionality
    await test.step('Reply on sent Mail.', async () => {
        await sentAction.navigateToSent(sentData.punchOutMail);


    })
});
const { expect } = require('@playwright/test')

class ComposeLocator {
    constructor(page) {
        this.page = page;


        this.locComposeButton = page.locator("//div/a[@data-test-id='compose-button']");
        this.locToMailId = page.locator("//div/input[@id='message-to-field']");
        this.locSubject = page.locator("//div/input[@data-test-id='compose-subject']");
        this.locDraftMessage = page.locator("[data-test-id='rte'][role='textbox'][contenteditable='true']");
        this.locSendButton = page.locator("//div/button[@data-test-id='compose-send-button']");

    }
}
module.exports = { ComposeLocator };
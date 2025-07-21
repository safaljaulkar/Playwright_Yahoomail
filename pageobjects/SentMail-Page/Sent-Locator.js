const { expect } = require('@playwright/test')

class SentLocator {
    constructor(page) {
        this.page = page;


        this.locSentButton = page.locator("//a[@data-test-id='folder-list-item' and @data-test-folder-name='Sent']");
        this.locSelectPunchMail = page.locator("//a[@data-test-id='message-list-item' and contains(@aria-label, 'Punch In/Out July)-2025')]");
        this.locReplyAllButton = page.locator("//div//li[@data-test-id ='REPLY_ALL']");
        //this.locReplyAllMessage = page.locator("[data-test-id='rte'][role='textbox'][contenteditable='true']");
        this.locReplyAllMessage = page.locator("(//div[@data-test-id='compose'])[1]//div[@class='D_F ek_BB em_N']");

        this.locReplySendButton = page.locator("//div/button[@data-test-id='compose-send-button']")




    }
}
module.exports = { SentLocator };



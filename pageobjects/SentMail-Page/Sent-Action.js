const { expect } = require('@playwright/test')
const { SentLocator } = require('../SentMail-Page/Sent-Locator');


class SentAction {
    constructor(page) {
        this.page = page;
        this.sentLocator = new SentLocator(this.page);
       
    }
    //Verify Compose mail 
    async navigateToSent(punchOutMail) {
        await this.sentLocator.locSentButton.click();
        await this.sentLocator.locSelectPunchMail.click();
        await this.sentLocator.locReplyAllButton.click();
        // await this.sentLocator.locReplyAllMessage.fill(punchInMail);

        await this.sentLocator.locReplyAllMessage.fill(punchOutMail);
      //  await this.sentLocator.locReplySendButton.click();



    }
}
module.exports = { SentAction };
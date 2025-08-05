const { expect } = require('@playwright/test')
const { ComposeLocator } = require('../Compose-Page/Compose-Locator');


class ComposeAction {
   constructor(page) {
      this.page = page;
      this.composeLocator = new ComposeLocator(this.page);

   }
   //Verify Compose mail 
   async navigateToCompose(mailID,subject,draftMail) {
      await this.composeLocator.locComposeButton.click();
      await this.composeLocator.locToMailId.click();
      await this.composeLocator.locToMailId.fill(mailID);
      await this.composeLocator.locSubject.fill(subject);
     await this.composeLocator.locDraftMessage.type(draftMail);
     // await this.composeLocator.locSendButton.click();



      
   }
}
module.exports = { ComposeAction };
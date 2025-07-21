const { expect } = require('@playwright/test')


class ComposeData {

    constructor(page) {
        this.page = page;

        this.mailID = "arunap@alohatechnologydev.com";
        this.subject = "Dummy tetsing mail";
        this.draftMail = "Testing Mail form safal";

    }
}
module.exports = { ComposeData };
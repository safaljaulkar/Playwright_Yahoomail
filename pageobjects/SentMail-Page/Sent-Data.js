const { expect } = require('@playwright/test')


class SentData {

    constructor(page) {
        this.page = page;

       // this.punchInMail = "Punch-In Time: 16 July 2025, 10:30 AM";
       this.punchOutMail = "Punch-Out Time: 16 July 2025, 8:00 PM";

    }
}
module.exports = { SentData };
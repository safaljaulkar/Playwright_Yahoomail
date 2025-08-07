const { expect } = require('@playwright/test')


class LoginData{

constructor(page){
this.page=page;
this.appURL = "https://mail.turbify.com/";
this.validUsername ="safalj@alohatechnologydev.com";
this.validPassword="Safal@@1997";
this.invalidUsername="safal";
this.invalidPassword ="sfksdf";
this.blankUsername = '';
this.blankPassword = '';
this.warningInvalidPassword= "Invalid user ID or password.";

}
}
module.exports = { LoginData };
const NativePage = require('./native.page.js');

//====================================================================================================================
//Author : Rashad Rouzdeen 
//Date   : 30.03.2022
//====================================================================================================================

class loginPage extends NativePage {

  //====================================================================================================================
  //Locators
  //====================================================================================================================

  get inputUsername() { return $('//input[@placeholder="Username"]') }
  get inputPassword() { return $('//input[@placeholder="Password"]') }
  get btnLogin() { return $('//button[@title="Login"]') }

  get btnVendorpanel() { return $('//button[@title="VendorPanel"]') }
  get inputUsername_VP() { return $('#UserName') }
  get btnNext_VP() { return $('#btnGo') }
  get inputPassword_VP() { return $('#Password') }


  //====================================================================================================================
  //Methods
  //====================================================================================================================

  async openURL() {
    await browser.url(process.env.core_url);
  }

  async maximizeWindow() {
    await browser.setWindowSize(1366,768);
  }


  async closewebdriverIOHomepage() {
    await browser.closeWindow();
  }

  

  async clearCookies() {
    await browser.deleteCookies();
  }

  //====================================================================================================================
  //Verifications
  //====================================================================================================================

  

}

module.exports = new loginPage();
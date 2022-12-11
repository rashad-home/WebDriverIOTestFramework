const NativePage = require('./native.page.js');

//====================================================================================================================
//Author : Rashad Rouzdeen 
//Date   : 01.12.2022
//====================================================================================================================

class googlePage extends NativePage {

  //====================================================================================================================
  //Locators
  //====================================================================================================================

  get inputgoogleSearchText() { return $('//input[@name="q"]') }
  get btnSearch() { return $('//input[@name="btnK"]') }

  get lblVerifySearch() { return $('//h3[text()="Next Official Site: Online Fashion, Kids Clothes & Homeware"]') }

 


  //====================================================================================================================
  //Methods
  //====================================================================================================================


  async googleSearch() {
    await (await this.inputgoogleSearchText).waitForDisplayed({ timeout: 10000 });
    await (await this.inputgoogleSearchText).setValue(process.env.googleSearchText);


  }

  async clickSearchButton(){

    await (await this.btnSearch).waitForClickable({ timeout: 10000 });
    await (await this.btnSearch).click();
    await browser.pause(4000);
  }

  //====================================================================================================================
  //Verifications
  //====================================================================================================================

  async verifySearch() {
    await (await this.lblVerifySearch).waitForDisplayed({ timeout: 10000 });
    await expect(await this.lblVerifySearch).toBeExisting();
    
  }

}

module.exports = new googlePage();
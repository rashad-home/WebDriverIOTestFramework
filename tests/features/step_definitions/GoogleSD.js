const { Given, When, Then } = require('cucumber');

const loginPage = require('../../pages/loginPage.js');
const googlePage = require('../../pages/googlePage.js');


Given('I am on the login page _Google', async () => {
    await loginPage.maximizeWindow();
    await loginPage.openURL();
});

When('I enter text _Google', async () => {
    await googlePage.googleSearch();
});

When('I click search button button _Google', async () => {
    await googlePage.clickSearchButton();
});

Then('I able to see the searched results _Google', async () => {
    await googlePage.verifySearch();
});


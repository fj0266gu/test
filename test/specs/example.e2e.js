//const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

//describe('My Login application', () => {
//    it('should login with valid credentials', async () => {
//        await LoginPage.open();

//        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//        await expect(SecurePage.flashAlert).toBeExisting();
//        await expect(SecurePage.flashAlert).toHaveTextContaining(
//            'You logged into a secure area!');
//    });
//});
const assert = require('assert');

describe('CID Test', function() {
   it('should display the title', async () => {
      await browser.url('/4d8324b4-f741-4854-912b-a9947e2fcbf3.test.test-0.0.1/index.html');
      var title = await browser.getTitle();
      console.log("title=" + title);
      assert(title === 'Log On');
      var user = await $('input');
      await user.setValue('fj0266gu@fujitsu.com');
      var button = await $('button');
      await button.click();
      title = await browser.getTitle();
      console.log("title=" + title);
      assert(title === 'SAP Universal ID');
      var pass = await $('');
      await pass.setValue('X10580@nob');
      button = await $('button');
      await button.click();
      title = await browser.getTitle();
      console.log("title=" + title);
      assert(title === 'CID Test');
   });
});


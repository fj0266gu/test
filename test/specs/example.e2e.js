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
      await browser.url('/b699b295-2c1e-42df-9c4b-1b26519872c8.test.test-0.0.1/index.html');
      var title = await browser.getTitle();
      console.log("title=" + title);
      assert(title === 'Log On');
      var user = await browser.$('input#j_username');
      await user.setValue('kei.nakata@jp.fujitsu.com');
      var button = await browser.$('button');
      await button.click();
      title = await browser.getTitle();
      console.log("title=" + title);
      assert(title === 'Log On');
      var pass = await browser.$('input#j_password');
      await pass.setValue('Monster8!');
      button = await browser.$('button');
      await button.click();
      title = await browser.getTitle();
      console.log("title=" + title);
      assert(title === 'CID Test');
   });
});


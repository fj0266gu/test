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

describe('Google', function() {
  it('should display the title', function() {
      browser.url('/cd3c862d-0a08-4f9a-96ca-cf91c8e3f50e.test.test-0.0.1/index.html');
      assert(browser.getTitle() === 'CID Test');
  });  
});


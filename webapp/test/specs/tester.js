const assert = require('assert');

describe('Google', function() {
  it('should display the title', function() {
      browser.url('https://www.google.co.jp/');
      assert(browser.getTitle() === 'Google');
  });  
});
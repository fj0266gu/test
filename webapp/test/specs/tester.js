const assert = require('assert');

describe('Google', function() {
  it('should display the title', function() {
      browser.url('https://4339639atrial.launchpad.cfapps.us10.hana.ondemand.com/cd3c862d-0a08-4f9a-96ca-cf91c8e3f50e.test.test-0.0.1/index.html');
      assert(browser.getTitle() === 'CID Test');
  });  
});
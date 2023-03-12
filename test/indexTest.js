describe('acessing /', function () {
  it('is successful', function (browser) {
    browser
      .navigateTo('http://localhost:3000')
      .waitForElementVisible('h1')
      .assert.visible('h1')
      .assert.textContains('h1', 'Welcome to Nuxt!');
  });
});
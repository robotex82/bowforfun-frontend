describe('acessing /', function () {
  it('is successful', function (browser) {
    browser
      .navigateTo('http://localhost:3000')
      .waitForElementVisible('h1')
      .assert.visible('h1')
      .assert.textContains('h1', 'Home')
      .click("#main-menu-trigger")
      .waitForElementVisible('.menu-enabled')
      .click("a[href='/about']")
      .assert.urlContains("/about")

    browser
      .waitForElementVisible('#main-menu-trigger')
      .assert.visible('#main-menu-trigger')
      .click("#main-menu-trigger")
      .waitForElementVisible('.menu-enabled')
      .click("a[href='/']")
      .assert.urlEquals("/")
  });
});
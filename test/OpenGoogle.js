module.exports = {
    'Open Google Test': function (browser) {
      browser.maximizeWindow()
        .url('https://www.google.com')       
        .waitForElementVisible('body', 1000) 
        .assert.titleContains('Google').setValue('[title="Search"]', ['https://linkedin.com/in/monu-verma-8964161a3', browser.Keys.ENTER])
        .waitForElementVisible(by.xpath('//*[text()="Monu Verma - Automation Consultant Level 2 - NashTech"]'), 10000).click(by.xpath('//*[text()="Monu Verma - Automation Consultant Level 2 - NashTech"]'))
        .click('#base-contextual-sign-in-modal > div > section > button > icon > svg').assert.elementPresent(by.xpath('//*[normalize-space(text())="Automation Consultant at NashTech ||Ex-infoscian|| ISTQB Certified Foundation Level || ISTQB Certified Agile Tester"]'))
        .end();
        // hello how are you                      
    }
  };
  
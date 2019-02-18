require('../spec.helper');

describe('User can input a string value and get Rps results ', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('clicking on the "Check" button in two-players game', async () => {
    await browser.clickOnButton('a[href="twoPlayers.html"]')
    await browser.fillIn("input[id='value1']", { with: "Rock" })
    await browser.fillIn("input[id='value2']", { with: "Paper" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Paper wins');
  })
});

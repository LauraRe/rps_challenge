require('../spec.helper');

describe('User can input a string value and get Rps results ', () => {
  before(async () => {
    await browser.init()
  });

  beforeEach(async () => {
    await browser.visitPage('http://localhost:8080/')
  });

  after(() => {
    browser.close();
  });

  it('clicking on the "Check" button in two-players game', async () => {
    await browser.clickOnButton("#two")
    await browser.fillIn("input[id='value1']", { with: "Rock" })
    await browser.clickOnButton("#submit1")
    await browser.fillIn("input[id='value2']", { with: "Paper" })
    await browser.clickOnButton("#submit2")
    await browser.clickOnButton("#resultButton")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Paper wins');
  })

  it('clicking on the "Check" button in one-player game', async () => {
    await browser.clickOnButton("#one")
    await browser.selectOption("#value", { option: "rock" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.be.a('string');
  })
});

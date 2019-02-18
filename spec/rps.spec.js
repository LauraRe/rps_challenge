const { Rps } = require('../spec.helper')
const sinon = require('sinon')

describe('Rps', () => {
    let rps = new Rps

    it('returns an error message if no valid option is inserted', () => {
        expect(rps.checkTwo('Banana', 'Apple')).to.eql('You must choose Rock, Paper or Scissors!')
    })

    it('returns Even if same value is inserted', () => {
        expect(rps.checkTwo('Rock', 'Rock')).to.eql('Tie!')
    })

    it('returns Paper wins if Rock vs Paper', () => {
        expect(rps.checkTwo('Rock', 'Paper')).to.eql('Paper wins')
    })

    it('returns Rock wins if Rock vs Scissors', () => {
        expect(rps.checkTwo('Rock', 'Scissors')).to.eql('Rock wins')
    })

    it('returns Scissors wins if Paper vs Scissors', () => {
        expect(rps.checkTwo('Paper', 'Scissors')).to.eql('Scissors wins')
    })

    it('returns Paper wins if Paper vs Rock', () => {
        expect(rps.checkTwo('Paper', 'Rock')).to.eql('Paper wins')
    })

    it('returns Rock wins if Scissors vs Rock', () => {
        expect(rps.checkTwo('Scissors', 'Rock')).to.eql('Rock wins')
    })

    it('returns Scissors wins if Scissors vs Paper', () => {
        expect(rps.checkTwo('Scissors', 'Paper')).to.eql('Scissors wins')
    })

    it('returns Rock wins if random number equals to zero', () => {
        sinon.stub(Math, 'random').returns(0)
        expect(rps.checkOne('scissors')).to.eql ('Rock wins')
    })
})
const { Rps } = require('../spec.helper')

describe('Rps', () => {
    let rps = new Rps

    it('returns an error message if no valid option is inserted', () => {
        expect(rps.check('Banana', 'Apple')).to.eql('You must choose Rock, Paper or Scissors!')
    })

    it('returns Even if same value is inserted', () => {
        expect(rps.check('Rock', 'Rock')).to.eql('Tie!')
    })

    it('returns Paper wins if Rock vs Paper', () => {
        expect(rps.check('Rock', 'Paper')).to.eql('Paper wins')
    })

    it('returns Rock wins if Rock vs Scissors', () => {
        expect(rps.check('Rock', 'Scissors')).to.eql('Rock wins')
    })

    it('returns Scissors wins if Paper vs Scissors', () => {
        expect(rps.check('Paper', 'Scissors')).to.eql('Scissors wins')
    })

    it('returns Paper wins if Paper vs Rock', () => {
        expect(rps.check('Paper', 'Rock')).to.eql('Paper wins')
    })

    it('returns Rock wins if Scissors vs Rock', () => {
        expect(rps.check('Scissors', 'Rock')).to.eql('Rock wins')
    })

    it('returns Scissors wins if Scissors vs Paper', () => {
        expect(rps.check('Scissors', 'Paper')).to.eql('Scissors wins')
    })
})
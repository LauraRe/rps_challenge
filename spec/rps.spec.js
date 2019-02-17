const { Rps } = require('../spec.helper')

describe('Rps', () => {
    let rps = new Rps

    it('returns an error message if no valid option is inserted', () => {
        expect(rps.check('Banana', 'Apple')).to.eql('You must choose Rock, Paper or Scissors!')
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

    it('returns a random computer choice', () => {
        computerOptions = ['Rock', 'Paper', 'Scissors']
        expect(computerOptions.randomChoice()).to.eql('Rock' || 'Paper' || 'Scissors')
    })

})
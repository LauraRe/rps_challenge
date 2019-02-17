function Rps()  {
    this.check = (string1, string2) => {
        if (string1 == 'Rock' && string2 == 'Paper') {
            return 'Paper wins';
        } else if (string1 == 'Rock' && string2 == 'Scissors') {
            return 'Rock wins';
        } else if (string1 == 'Paper' && string2 == 'Scissors') {
            return 'Scissors wins'
        } else {
            return 'You must choose Rock, Paper or Scissors!'
        }
    }
}
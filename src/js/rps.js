function Rps()  {
    this.check = (string1, string2) => {
        str1 = string1.toLowerCase()
        str2 = string2.toLowerCase()
        if (str1 == 'rock' && str2 == 'paper') {
            return 'Paper wins';
        } else if (str1 == 'rock' && str2 == 'scissors') {
            return 'Rock wins';
        } else if (str1 == 'paper' && str2 == 'scissors') {
            return 'Scissors wins';
        } else if (str1 == str2) {
            return 'Even!';
        } else {
            return 'You must choose Rock, Paper or Scissors!';
        }
    }
}
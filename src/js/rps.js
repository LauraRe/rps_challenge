function Rps()  {
    this.checkOne = (player) => {
        const str2 = player.toLowerCase()
        const computerChoice = ['rock', 'paper', 'scissors'];
        const str1 = computerChoice[Math.floor(Math.random() * computerChoice.length)];

        if ((str1 == 'rock' && str2 == 'paper') || (str1 == 'paper' && str2 == 'rock')) {
            return 'Paper wins';
        } else if ((str1 == 'rock' && str2 == 'scissors') || (str1 == 'scissors' && str2 == 'rock')) {
            return 'Rock wins';
        } else if ((str1 == 'paper' && str2 == 'scissors') || (str1 == 'scissors' && str2 == 'paper')) {
            return 'Scissors wins';
        } else if (str1 == str2) {
            return 'Tie!';
        } else {
            return 'You must choose Rock, Paper or Scissors!';
        }
    }

    this.checkTwo = (string1, string2) => {
        const str1 = string1.toLowerCase()
        const str2 = string2.toLowerCase()
        
        if ((str1 == 'rock' && str2 == 'paper') || (str1 == 'paper' && str2 == 'rock')) {
            return 'Paper wins';
        } else if ((str1 == 'rock' && str2 == 'scissors') || (str1 == 'scissors' && str2 == 'rock')) {
            return 'Rock wins';
        } else if ((str1 == 'paper' && str2 == 'scissors') || (str1 == 'scissors' && str2 == 'paper')) {
            return 'Scissors wins';
        } else if (str1 == str2) {
            return 'Tie!';
        } else {
            return 'You must choose Rock, Paper or Scissors!';
        }
    }
}
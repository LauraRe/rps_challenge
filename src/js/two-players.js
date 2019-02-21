document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('resultButton')
    let displayDiv = document.getElementById('display_answer')
    button.addEventListener('click', () => {
        let value1 = document.getElementById('value1').value
        let value2 = document.getElementById('value2').value
        let rps = new Rps
        let result = rps.checkTwo(value1, value2)
        displayDiv.innerHTML = result
        document.getElementById('playAgain').classList.remove('invisible')
    })

    let player1 = document.getElementById('submit1')
    player1.addEventListener('click', () => {
        document.getElementById('player1').classList.add('invisible')
        document.getElementById('player2').classList.remove('invisible')
    })

    let player2 = document.getElementById('submit2')
    player2.addEventListener('click', () => {
        document.getElementById('player2').classList.add('invisible')
        document.getElementById('resultButton').classList.remove('invisible')
    })

    let play = document.getElementById('playAgain')
    play.addEventListener('click', () => {
        location.reload()
    })
})
document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('button')
    let displayDiv = document.getElementById('display_answer')
    button.addEventListener('click', () => {
        let value = document.getElementById('value').value
        let rps = new Rps
        let result = rps.checkOne(value)
        displayDiv.innerHTML = result;
        document.getElementById('playAgain').classList.remove('invisible')
    })

    let play = document.getElementById('playAgain')
    play.addEventListener('click', () => {
        location.reload()
    })
})
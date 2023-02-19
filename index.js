const divUserName = document.querySelector('.user-name')
const divGameCount = document.querySelector('.game-count')
const divGame = document.querySelector('.game')

const inputName = document.getElementById('name')

const gamesAll = document.getElementById('game-all')
const userWin = document.getElementById('user-win')
const pcWin = document.getElementById('pc-win')

const btnToCount = document.getElementById('to-count')
const inputCount = document.getElementById('count')
const btnToGame = document.getElementById('to-game')

const rockPic = document.getElementById('rock')
const scissorsPic = document.getElementById('scissors')
const paperPic = document.getElementById('paper')

const spanMiddleResult = document.querySelector('#middle-result')
const divMiddleResult = document.querySelector('.middle-result')

btnToCount.setAttribute('disabled', true)
divGameCount.style.display = 'none'
divGame.style.display = 'none'

const showCount = () => {
    divUserName.style.display = 'none'
    divGameCount.style.display = 'block'
    inputName.removeEventListener('input', disableName)

}

const disableName = () => {
    console.log(inputName.value.length);
    if (inputName.value.length < 2) {
        btnToCount.setAttribute('disabled', true)
    } else {
        btnToCount.removeAttribute('disabled')
    }
}

btnToCount.onclick = () => {
    showCount()
} 


inputName.addEventListener('input', disableName)

btnToGame.onclick = () => {
    divGameCount.style.display = 'none'
    divGame.style.display = 'block'
}

const PC_CHOOSE = ['rock', 'scissors', 'paper']

rockPic.onclick = () => {
    const user = 'rock'
    const pc = PC_CHOOSE[Math.floor(Math.random() * 3)]
    switch (pc) {
        case 'rock':
            gameCounter(null, user, pc)
            break;
        case 'scissors':
            gameCounter('user', user, pc)
            break;
        case 'paper':
            gameCounter('pc', user, pc)
            break;
    }
}
scissorsPic.onclick = () => {
    const user = 'scissors'
    const pc = PC_CHOOSE[Math.floor(Math.random() * 3)]
    switch (pc) {
        case 'rock':
            gameCounter('user', user, pc)
            break;
        case 'scissors':
            gameCounter(null, user, pc )
            break;
        case 'paper':
            gameCounter('pc', user, pc)
            break;
    }
}
paperPic.onclick = () => {
    const user = 'paper'
    const pc = PC_CHOOSE[Math.floor(Math.random() * 3)]
    switch (pc) {
        case 'rock':
            gameCounter('user', user, pc)
            break;
        case 'scissors':
            gameCounter('pc', user, pc)
            break;
        case 'paper':
            gameCounter(null, user, pc)
            break;
    }
}



let countGames = 0
let pcCounterWin = 0
let userCounterWin = 0
let GameCounty = 0

const gameCounter = (winner, user, pc) => {
    switch (winner) {
        case 'user':
            userCounterWin++
            break;

            case 'pc':
            pcCounterWin++
            break;

    }
    
    countGames++
    gamesAll.innerHTML = countGames
    userWin.innerHTML = userCounterWin
    pcWin.innerHTML = pcCounterWin
    spanMiddleResult.innerHTML = `ПК выбрал ${pc}, Вы выбрали ${user}`
    divMiddleResult.style.display = 'block'

    setTimeout(() => {
        divMiddleResult.style.display = 'none'
    }, 3000)

    if (countGames === inputCount.value) {

    }

}

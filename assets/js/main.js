let uRes = document.getElementById('uRes')
let cRes = document.getElementById('cRes')
let print = document.getElementById('print')
let roundShowRes = document.getElementById('roundShowRes')
let roundMaxShow = document.getElementById('roundMaxShow')
let select = document.querySelector('.select')
let form = document.querySelector('form')

let choices = ['stone', 'sheet', 'sciss']
let rounds = 0
let uScore = 0
let cScore = 0
let uChoice;
let cChoice;
let beater;
let finish = false

function roundCheck() {
    let round5 = document.getElementById('round5').checked
    let round10 = document.getElementById('round10').checked
    let round15 = document.getElementById('round15').checked
    let round20 = document.getElementById('round20').checked
    switch (true) {
        case (round5):
            rounds = 5;
            break;
        case (round10):
            rounds = 10;
            break;
        case (round15):
            rounds = 15;
            break;
        case (round20):
            rounds = 20;
            break;
    }
    form.setAttribute('style', 'display:none')
    select.setAttribute('style', 'display:unset')

}

function cGen() {
    let cMoveIndex = Math.round(Math.random() * 2)
    cChoice = choices[cMoveIndex]
}

function resultChecker(a, b, c) {
    switch (a + b) {
        case 'stonestone':
        case 'sheetsheet':
        case 'scisssciss':
            beater = 'd';
            print.innerHTML = 'draw !'
            c.setAttribute('class', 'resDraw')
            break

        case 'stonesciss':
        case 'sheetstone':
        case 'scisssheet':
            beater = 'u';
            uScore++
            print.innerHTML = 'USER beats COMP. You won !'
            c.setAttribute('class', 'resWin')
            break

        case 'scissstone':
        case 'stonesheet':
        case 'sheetsciss':
            c.setAttribute('class', 'resLoss')
            beater = 'c';
            cScore++
            print.innerHTML = 'COMP beats USER. You lost !'
            break
    }
}

let roundCounter = 1
let mySigns = document.querySelector('.mySigns')

mySigns.addEventListener('click', (i) => {
    let selected = i.srcElement
    if (finish == false && rounds > 0) {
        roundShowRes.innerHTML = roundCounter
        roundMaxShow.innerHTML = rounds
        roundCounter++
        let uChoice = selected.id
        cGen();
        resultChecker(uChoice, cChoice, selected);

        uRes.innerHTML = uScore
        cRes.innerHTML = cScore
        if (roundCounter == rounds + 1) {
            finish = true
            if (uScore > cScore) {
                print.innerHTML = 'YOU WON'
            } else if (uScore < cScore) {
                print.innerHTML = 'YOU LOST'
            }
        }
        setTimeout(() => (selected.classList.remove("resDraw")), 540)
        setTimeout(() => (selected.classList.remove("resWin")), 540)
        setTimeout(() => (selected.classList.remove("resLoss")), 540)
    }
})
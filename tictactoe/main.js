const jogo = document.querySelector('#jogo')
const resetGame = document.querySelector('#resetGame')
const winnerDisplay = document.querySelector('#winner')
const winner = document.querySelector('#winner span')
const player1Style = document.querySelector('#p1')
const player2Style = document.querySelector('#p2')

let player1
let player2

let turn = false //false player1, true player2
let win = false
let draw = 0
let aux = 0

const start = (event) => {
    event.preventDefault()
    player1 = event.target.Player.value
    if (player1 === "x") {
        player2 = "o"
    } else {
        player2 = "x"
    }
    jogo.style.display = 'flex'
}
const add = (event) => {
    const jogada = event.target
    if (turn === false) {
        jogada.innerText = player1
        player1Style.style.backgroundColor = 'transparent'
        
        player2Style.style.backgroundColor = '#FB3640'
        

    } else {
        jogada.innerText = player2
        player2Style.style.backgroundColor = 'transparent'
        
        player1Style.style.backgroundColor = '#FB3640'
        
    }
    turn = !turn
    ganhou()
}

const ganhou = () => {
    const box1 = document.querySelector('#box1').innerText
    const box2 = document.querySelector('#box2').innerText
    const box3 = document.querySelector('#box3').innerText
    const box4 = document.querySelector('#box4').innerText
    const box5 = document.querySelector('#box5').innerText
    const box6 = document.querySelector('#box6').innerText
    const box7 = document.querySelector('#box7').innerText
    const box8 = document.querySelector('#box8').innerText
    const box9 = document.querySelector('#box9').innerText
    const mat = [[box1, box2, box3], [box4, box5, box6], [box7, box8, box9]]
    let temp
    if (mat[0][0] === mat[1][1] && mat[0][0] === mat[2][2] && mat[0][0] != '') {
        win = true
        temp = mat[0][0]
    }
    else if (mat[2][0] === mat[1][1] && mat[2][0] === mat[0][2] && mat[2][0] != '') {
        win = true
        temp = mat[2][0]
    }
    for (let l = 0; l < 3; l++) {
        if (mat[l][0] === mat[l][1] && mat[l][0] === mat[l][2] && mat[l][0] != '') {
            win = true
            temp = mat[l][0]
        }
        else if (mat[0][l] === mat[1][l] && mat[0][l] === mat[2][l] && mat[0][l] != '') {
            win = true
            console.log("venceu")
        }
    }

    if(win === true && aux === 0){
        winnerDisplay.style.display = 'flex'
        resetGame.style.display = 'flex'
        if(player1 === temp){
            winner.innerText = 'Player 1'
        }
        else{
            winner.innerText = 'Player 2'
        }
        aux++
        win = false
        setTimeout(reset, 2000)
    }
    else{
        for(let l = 1; l<3; l++){
            for(let c = 0; c<3; c++){
            if(mat[l][c] != ''){
               draw++
            }
            }
        }
        console.log(draw)
        if(draw == 6 && aux==0){
        const empate = winner.closest('h3')
        empate.innerText = 'Empate'
        winnerDisplay.style.display = 'flex'
        setTimeout(reset, 2000)
        } else{
            draw = 0
        }
    }
}

function reset(){
    turn = !turn
    aux = 0
    draw = 0
    winnerDisplay.style.display = 'none'
    jogo.style.display = 'none'
    resetGame.style.display = 'none'
    winner.innerText = ''
    for(let l = 1; l<=9; l++){
        const box = document.querySelector(`#box${l}`)
        box.innerText = ''
    }
   
}
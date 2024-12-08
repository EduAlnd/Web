const cardList = document.getElementById('card-list')
const hour = document.querySelector('#hours')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const milis = document.querySelector('#milis')
const btns = document.querySelector('#start')
const btnsOn = document.querySelector('#on')
const startBtn = document.querySelector("#startBtn")

let enumeracao = 1
let intervalo
let hours = 0
let minutes = 0
let seconds = 0
let miliseconds = 0

const start = () =>{
    btns.style.display = 'none'
    btnsOn.style.display = 'flex'
    intervalo = setInterval(()=>{
        miliseconds += 10
        if(miliseconds === 1000){
            miliseconds = 0
            seconds++
        }
        if(seconds === 60){
            seconds = 0
            minutes++
        }
        if(minutes === 60){
            minutes = 0
            hours++
        }
        hour.innerText = (hours<10) ? `0${hours}` : hours
        min.innerText = (minutes<10) ? `0${minutes}` : minutes
        sec.innerText = (seconds<10) ? `0${seconds}` : seconds
        milis.innerText = (miliseconds<100) ? `${miliseconds}`.padStart(3, '0') : miliseconds
    }, 10)
    
}
const pause = ( ) =>{
    clearInterval(intervalo)
    btnsOn.style.display = 'none'
    btns.style.display = 'flex'
}
const note = ( ) =>{
    cardList.innerHTML += `
    <div class="card">
                <header>
                    <p>${enumeracao}</p>
                </header>
                <main>
                    <h4 id="card-hour">${hour.innerText}</h4>
                    <p id="card-dots">:</p>
                    <h4 id="card-min">${min.innerText}</h4>
                    <h4 id="card-sec">${sec.innerText}</h4>
                </main>
            </div>
    `
    enumeracao++;
}
const reset = ( ) =>{
    cardList.innerHTML = ' '
    hour.innerText = '00'
    min.innerText ='00'
    sec.innerText = '00'
    milis.innerText = '000'
    intervalo
    hours = 0
    minutes = 0
    seconds = 0
    miliseconds = 0
    enumeracao= 1
}
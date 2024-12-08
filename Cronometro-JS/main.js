let posi = 2
let intervalo
const cardList = document.getElementById('card-list')
const hour = document.querySelector('#hours')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const milis = document.querySelector('#milis')
const btns = document.querySelector('#start')
const btnsOn = document.querySelector('#on')
const startBtn = document.querySelector("#startBtn")

const start = () =>{
    btns.style.display = 'none'
    btnsOn.style.display = 'flex'
    intervalo = setInterval(()=>{
        if(+milis.innerText === 1000){
            milis.innerText= '000'
            sec.innerText++
            sec.innerText = (sec.innerText < 10) ? `0${sec.innerText}` : sec.innerText
        }
        else if(+milis.innerText>= 0){
            milis.innerText= parseInt(milis.innerText)+ 10
            milis.innerText = (+milis.innerText < 100) ? milis.innerText.padStart(3, '0') : milis.innerText
        }
        if(+sec.innerText=== 60){
            sec.innerText = sec.padStart(2, "0")
            min.innerText++
        }
        if(+min.innerText=== 60){
            min.innerText = min.padStart(2, "0")
            hour.innerText++
        }
        
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
                    <p>${posi}</p>
                </header>
                <main>
                    <h4 id="card-hour">${hour.innerText}</h4>
                    <p id="card-dots">:</p>
                    <h4 id="card-min">${min.innerText}</h4>
                    <h4 id="card-sec">${sec.innerText}</h4>
                </main>
            </div>
    `
    posi++;
}
const reset = ( ) =>{
    cardList.innerHTML = ' '
    hour.innerText = '00'
    min.innerText ='00'
    sec.innerText = '00'
    milis.innerText = '000'
    posi = 1
}
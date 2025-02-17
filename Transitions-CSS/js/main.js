const hoverCard = document.querySelector('#card-test')
const hoverText = hoverCard.querySelector('#card-test h3')
const style = document.querySelector('style')
const hoverTextPath = "#tests #card-test h3"
const hoverCardPath = "#tests #card-test"

const transitions = (transition) => {
    let cardColor = document.getElementById('cardColor').value
    let textColor = document.getElementById('textColor').value
    const delay = document.getElementById('delay').value
    if(cardColor === ''){ cardColor = 'rgba(0, 0, 0, 0.479)' }
    if(textColor === ''){ textColor = 'white' }
    
    if(transition === null){
        style.textContent = `
            ${hoverCardPath}:after{
                bottom: 0;
                left: 0;
            }
            ${hoverCardPath}:hover:after{
                width: 100%;
                background-color: ${cardColor};
                
            }
            ${hoverCardPath}:hover{
                color: ${textColor};
            }
        `
    } 
    else if(transition.startsWith('cubic')){
        style.textContent = `
        ${hoverCardPath}:after{
            bottom: 0;
            left: 0;
        }
        ${hoverCardPath}:hover:after{
            width: 100%;
            background-color: ${cardColor};
            transition: ${transition}(0, 0.81, 0.5, .97) ${delay}s;
        }
        ${hoverCardPath}:hover{
            color: ${textColor};
        }
    ` 
    }
    else{
        style.textContent = `
            ${hoverCardPath}:after{
                bottom: 0;
                left: 0;
            }
            ${hoverCardPath}:hover:after{
                width: 100%;
                background-color: ${cardColor};
                transition: ${transition} ${delay}s;
            }
            ${hoverCardPath}:hover{
                color: ${textColor};
            }
        `
    }
}
const transform = (type) => {
    const value = document.getElementById('number').value
    if(type.startsWith('rotate') || type.startsWith('skew')){
        style.textContent = `
                ${hoverTextPath}{
                    transform: ${type}(${value}deg);
                }
            `
    }
    else if(type.startsWith('scale')){
        style.textContent = `
                ${hoverTextPath}{
                    transform: ${type}(${value});
                }
            `
            setTimeout(()=>{
                style.textContent= ''
            },5000)
    }
    else{
        style.textContent = `
        ${hoverTextPath}{
            transform: ${type}(${value}px);
        }
    `
    }
}

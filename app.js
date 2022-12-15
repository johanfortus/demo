function randomColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

let letters = document.querySelectorAll('.letters')

let inervalId = setInterval(function(){
    for(let all of letters){
        all.style.color = randomColor();
    }
},1000)
//Expose header on curtain click
let isExposedLeft = false;
let isExposedRight = false;
let curtainLeft = document.querySelector(".curtain");
const delayMS = 1000;

function exposeLeft(){
    curtainRight.style.transition = 'transform 1s ease-out';
    curtainLeft.style.transform = 'translateX(100%)';
    setTimeout(() =>{
        curtainLeft.style.display = 'none';
    }, delayMS);
    isExposedLeft = true;
    
}

let curtainRight = document.querySelectorAll(".curtain")[1];

function exposeRight(){
    curtainRight.style.transition = 'transform 1s ease-out';
    curtainRight.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        curtainRight.style.display = 'none';
    }, delayMS)
    isExposedRight = true;
}

//Temporary text
let tempText = document.querySelector(".tempText");

let TTInterval = setInterval(() =>{
    if(isExposedLeft && isExposedRight){
        tempText.style.display = 'none';
        clearInterval(TTInterval);
    }
}, 10)


//Title box animation
let title = document.querySelectorAll(".title");
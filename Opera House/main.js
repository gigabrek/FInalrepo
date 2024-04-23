let curtainLeft = document.querySelector(".curtain");

function exposeLeft(){
    curtainRight.style.transition = 'transform 1s ease-out';
    curtainLeft.style.transform = 'translateX(100%)';
}

let curtainRight = document.querySelectorAll(".curtain")[1];

function exposeRight(){
    curtainRight.style.transition = 'transform 1s ease-out';
    curtainRight.style.transform = 'translateX(-100%)';
}

let title = document.querySelectorAll(".title");
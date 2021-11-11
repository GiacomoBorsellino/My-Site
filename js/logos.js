
function logo1() {
    document.body.getElementsByClassName("imgLogos")[0].src = "../images/logo1.svg";    
}

function logo2() {
    document.body.getElementsByClassName("imgLogos")[0].src = "../images/logo2.svg";    
}

function logo3() {
    document.body.getElementsByClassName("imgLogos")[0].src = "../images/logo3.svg";    
}

setTimeout(() => {logo1()}, 0);
setTimeout(() => {logo2()}, 4001);
setTimeout(() => {logo3()}, 8002);

setInterval(() => {
    setTimeout(() => {logo1()}, 0);
    setTimeout(() => {logo2()}, 4001);
    setTimeout(() => {logo3()}, 8002);
    }, 12002);    





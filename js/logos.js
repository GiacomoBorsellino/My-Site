
function logo1() {
    document.body.getElementsByClassName("imgLogos")[0].src = "../images/logo1.png";    
}

function logo2() {
    document.body.getElementsByClassName("imgLogos")[0].src = "../images/logo2.png";    
}

function logo3() {
    document.body.getElementsByClassName("imgLogos")[0].src = "../images/logo3.png";    
}

setTimeout(() => {logo1()}, 0);
setTimeout(() => {logo2()}, 4001);
setTimeout(() => {logo3()}, 8002);

setInterval(() => {
    setTimeout(() => {logo1()}, 0);
    setTimeout(() => {logo2()}, 4001);
    setTimeout(() => {logo3()}, 8002);
    }, 12002);    





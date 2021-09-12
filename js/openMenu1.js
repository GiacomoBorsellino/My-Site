// Open Menu

let count = 0;

function counterPlus() {
    let opo = (++count) % (2);
    
    if (opo == 0) {
        document.body.getElementsByClassName("tabContainer")[0].classList.add("closeMenu");

        document.body.getElementsByClassName("li1")[0].classList.add("lia");
        document.body.getElementsByClassName("li2")[0].classList.add("lib");
        document.body.getElementsByClassName("li3")[0].classList.add("lic");
        document.body.getElementsByClassName("li4")[0].classList.add("lid");

        setTimeout(() => {
            document.body.getElementsByClassName("tabContainer")[0].style.display = "none";
            document.body.getElementsByClassName("img2")[0].src = "./images/menu.svg";
            document.body.getElementsByClassName("img1")[0].src = "./images/favicon.svg";
        }, 700);

        setTimeout(() => {
            document.body.getElementsByClassName("tabContainer")[0].classList.remove("closeMenu");

            document.body.getElementsByClassName("li1")[0].classList.remove("lia");
            document.body.getElementsByClassName("li2")[0].classList.remove("lib");
            document.body.getElementsByClassName("li3")[0].classList.remove("lic");
            document.body.getElementsByClassName("li4")[0].classList.remove("lid");

        }, 710);
    } else if (opo == 1) {
        document.body.getElementsByClassName("tabContainer")[0].style.display = "block";

        document.body.getElementsByClassName("img2")[0].src = "./images/menu-dark.svg";
        document.body.getElementsByClassName("img1")[0].src = "./images/favicon-dark.svg";
    }
}
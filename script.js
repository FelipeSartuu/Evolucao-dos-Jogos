function toUP() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function displaybutton() {
    if (window.scrollY === 0) {
        document.querySelector(".button-up").style.display = "none";
    } else {
        document.querySelector(".button-up").style.display = "block";
    }
}

window.addEventListener("scroll", displaybutton)

upperbutton = document.querySelector(".button-up").addEventListener("click", toUP)

const body = document.getElementById("body");
const linksContainer = document.getElementsByClassName("nav__links")[0];
const menu = document.getElementById("menu");

//Dark mode
function darkMode() {
    body.classList.toggle("darkMode");
    document.querySelectorAll("section").forEach(elem => elem.classList.toggle("darkMode"))
    navColor();
    iconColor();
    cardsBackground();

    document.getElementById("forms__btn").classList.toggle("darkModeBtn");

}

function navColor() { 
    document.getElementById("nav").classList.toggle("navDarkMode");
    document.querySelectorAll("a").forEach(elem => elem.classList.toggle("linksDarkMode"));
}

function iconColor() {
    document.querySelectorAll("svg").forEach(elem => {
        elem.style.fill = body.classList.contains("darkMode") ? "white" : "black";
    });  
}

function cardsBackground() {
    document.querySelectorAll(".card").forEach(elem => {
        //console.log(elem) 
        elem.classList.toggle("darkCards")
    });
}

document.getElementById("switch").addEventListener("click", darkMode);

document.querySelectorAll(".nav__link").forEach(elem => {
    elem.addEventListener("mouseenter", e => {
        if(window.innerWidth < 650){
            e.target.style.borderBottom = "1px solid black";
        } else {
            e.target.style.border = elem.firstChild.classList.contains("linksDarkMode") ? "1px solid white" : "1px solid black";
        }
    });
    
    elem.addEventListener("mouseleave", e => e.target.style.border = "1px solid transparent");
});

menu.addEventListener("click", () => {
    linksContainer.style.transition = "transform 1s"
    linksContainer.classList.toggle("nav__linksMenu");
    if(linksContainer.classList.contains("nav__linksMenu")){
        menu.setAttribute("aria-expanded", "true");
    } else {
        menu.setAttribute("aria-expadned", "false");
    }

})

window.addEventListener('resize', () => {
    if(window.innerWidth > 650 && linksContainer.classList.contains("nav__linksMenu")) {
        linksContainer.style.transition = "none"
        linksContainer.classList.remove("nav__linksMenu");
    }
});


document.querySelectorAll(".nav__item").forEach(elem => {
    elem.addEventListener("click", ()=> {
        linksContainer.classList.remove("nav__linksMenu");
    })
});


/* WAI-ARIA example */ 
const ariaBtn = document.getElementById("ariaBtn");
const ariaListTitle = document.getElementById("ariaListTitle");
const ariaListItems = document.getElementById("ariaListItems");
ariaBtn.setAttribute("aria-expanded", false);
ariaListTitle.style.display = "none";
ariaListItems.style.display = "none";

function aria() {
    if (ariaBtn.getAttribute("aria-expanded") === "false") {
        ariaBtn.setAttribute("aria-expanded", true);
        ariaListTitle.style.display = "block";
        ariaListItems.style.display = "block";
    } else {
        ariaBtn.setAttribute("aria-expanded", false);
        ariaListTitle.style.display = "none";
        ariaListItems.style.display = "none";
}
    const message = document.getElementById("aria-state");
    message.innerHTML = `aria-expanded = ` + ariaBtn.getAttribute("aria-expanded");
}

document.getElementById("ariaBtn").addEventListener("click", aria);


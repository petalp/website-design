const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", ()=>{
    preloader.classList.add("remove")
})


const addEventOnElements = function (elements, eventType, callback){
    for(let i=0, len=elements.length; i<len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

const navBar = document.querySelector("[data-navBar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overLay = document.querySelector("[data-overlay]");

const toggleNav = function (){
    
    navBar.classList.toggle("active");
    overLay .classList.toggle("active");
    document.body.classList.toggle("nav-active");

}

addEventOnElements(navTogglers, 'click', toggleNav)

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
})
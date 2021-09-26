//! Select Elements
// Nav Hamburger and scroll
const nav = document.getElementById('nav');
const menuToggle = document.querySelector('.nav-menu-toggle input');
const navLink = document.querySelector('.nav .nav-link');
// language
const langBtn = document.querySelector(".lang-button");
const langList = document.querySelector(".lang-dropdown .list");
const langArrow = document.querySelector('.lang-button .arrow-icon');



//! Hamburger Menu Script
menuToggle.addEventListener('click', function(){
    navLink.classList.toggle('slide')
});



//! Language Script 
langBtn.addEventListener('click', function(){
    langList.classList.toggle("show-the-link");
    langArrow.classList.toggle("arrow-rotate");
});


// !Close it if the user click outside of it
window.onclick = function(event) {
    if (!event.target.matches('.lang-button')){
        let dropdowns = document.getElementsByClassName("list");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-the-link')) {
                openDropdown.classList.remove('show-the-link');
                langArrow.classList.remove("arrow-rotate");
            }
        }
    }
    if (!event.target.matches('.btn-toggle')){
        navLink.classList.remove('slide');
        document.querySelector('.btn-toggle').checked = false;
    }
};
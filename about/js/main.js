const html = document.querySelector('html');
const body = document.querySelector('body');

if (window.navigator.language === 'id'){
    body.innerHTML = pageId;
    html.setAttribute('lang', 'id');
} else {
    body.innerHTML = pageEn;
    html.setAttribute('lang', 'en');
}


// Suggestion Language Pop-up
setTimeout(function(){
    body.querySelector(".suggest-lang").classList.add('pop-up');
}, 5000)

setTimeout(function(){
    body.querySelector(".suggest-lang").classList.remove('pop-up');
}, 55000)


html.addEventListener('click', function(e){

    console.log(e.target);

    if (e.target.classList.contains('switch-lang')) {
        const lang = html.attributes.getNamedItem('lang').value;

        if (lang === 'en'){
            body.innerHTML = pageId;
            html.setAttribute('lang', 'id');
        } else if (lang === 'id') {
            body.innerHTML = pageEn;
            html.setAttribute('lang', 'en');
        }
    }
    

    //! Hamburger Menu Script
    if (e.target.classList.contains('btn-toggle')) {
        // To remove active class when user close the navLink
        document.querySelector('.nav .nav-link').classList.toggle('slide');
    }


    //! Button Language Script 
    if (e.target.classList.contains('lang-button')) {
        // Show The List of Different Lang
        document.querySelector(".lang-dropdown .list").classList.toggle("show-the-link");
        // Remove the pop-up class
        body.querySelector(".suggest-lang").classList.remove('pop-up');
        // Trigger the arrow animation
        document.querySelector('.lang-button .arrow-icon').classList.toggle("arrow-rotate");
    }

});



window.addEventListener('click', function(event) {
    //! Close Lang List if the user click outside of it
    if (!event.target.matches('.lang-button')){
        let dropdowns = document.getElementsByClassName("list");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-the-link')) {
                openDropdown.classList.remove('show-the-link');
                document.querySelector('.lang-button .arrow-icon').classList.remove("arrow-rotate");
            }
        }
    }

    //! Close Nav Menu on Mobile Size if the user click outside of it
    if (!event.target.matches('.btn-toggle')){
        document.querySelector('.nav .nav-link').classList.remove('slide');
        document.querySelector('.btn-toggle').checked = false;
    }
});
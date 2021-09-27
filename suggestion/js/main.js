const html = document.querySelector('html');
const body = document.querySelector('body');

if (window.navigator.language === 'id'){
    body.innerHTML = pageId;
    html.setAttribute('lang', 'id');
} else {
    body.innerHTML = pageEn;
    html.setAttribute('lang', 'en');
}

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


    //! Important Form-Submit
    // Select Display Loading Status
    const status = document.querySelector('.form-status');
    const loading = document.querySelector('#loading');
    const positive = document.querySelector('#positive');
    const negative = document.querySelector('#negative');

    // Select Google Sheets API
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzAKHPBr2XspGWZZIkCRL8xOrUrt_nbgIJunvMHFspERT0C9DT6xFhKhVhIxz2iE_Zt/exec';
    const form = document.forms['submit-to-google-sheet'];

    // Close Display Loading Status if the user click outside of it
    if (!loading.classList.contains('on')) {
        if (!event.target.matches('.box-form-status')){
        status.classList.remove('close');
        positive.classList.remove('on');
        negative.classList.remove('on');
        }
    }

    form.addEventListener('submit', e => {
    e.preventDefault()
    
    loading.classList.add('on');
    status.classList.add('close');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
        loading.classList.remove('on');
        positive.classList.add('on');
        form.reset();
        console.log(response);
        })
        .catch(error => {
        loading.classList.remove('on');
        negative.classList.add('on');
        document.querySelector('.error-status').innerHTML = error;
        console.log(error);
    })
    });
});
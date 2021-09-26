// Close Status Script
const status = document.querySelector('.form-status');
const loading = document.querySelector('#loading');
const positive = document.querySelector('#positive');
const negative = document.querySelector('#negative');

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzAKHPBr2XspGWZZIkCRL8xOrUrt_nbgIJunvMHFspERT0C9DT6xFhKhVhIxz2iE_Zt/exec';
const scriptURL = 'https://script.google.com/macros/s/AKfycbzAKHPBr2XspGWZZIkCRL8xOrUrt_nbgIJunvMHFspERT0C9DT6xFhKhVhIxz2iE_Zt/exec';
const form = document.forms['submit-to-google-sheet'];


// Close it if the user click outside of it
window.addEventListener('click', function(event) {
  if (!loading.classList.contains('on')) {
    if (!event.target.matches('.box-form-status')){
      status.classList.remove('close');
      positive.classList.remove('on');
      negative.classList.remove('on');
    }
  }
});


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


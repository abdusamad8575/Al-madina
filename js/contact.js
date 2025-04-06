// const scriptURL = 'https://script.google.com/macros/s/AKfycbwGwQntXr61k-b3hbRGrzkfU1RSVEhIgc33SIiWtGd8m3M8tuCY944RB8HgPabjEL-leA/exec'

const form = document.forms['contact-form']
const submitButton = document.querySelector('button[type="submit"]');


form.addEventListener('submit', e => {
 e.preventDefault()
 submitButton.disabled = true;
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})





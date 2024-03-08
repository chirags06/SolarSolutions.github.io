const scriptURL = 'https://script.google.com/macros/s/AKfycbzT-ujSxS32CTwuDqbw6zwb1HjM0fnvY_JXPnjPX-1FDfsTBbe3XQCu9-JAJ63m-z2PQA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Your Form Has Been Sumbitted!"))
    .then(()=>{window.location.reload();})
    .catch(error=> console.error('Error!', error.message))
})
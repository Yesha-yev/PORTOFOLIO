  const scriptURL = 'https://script.google.com/macros/s/AKfycbygO7yaIU4syh7RXB_1_i4VQxMcSubzM_o4e80bT6FfdS3ZeN64r3IslF_72uWW29CW/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

const button = document.querySelector('#submitButton')
const input = document.querySelector('#bookInput').value

button.addEventListener('click', async () => {
    
    let response = await axios.get(
      `https://bible-api.com/john 3:16`
    )
      console.log(response.data) 
  })


  
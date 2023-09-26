
//getting the elements from HTML by referencing the label(class by# and saving it to location (const bookInput, chaperInput and verse Input)
const bookInput = document.querySelector('#bookInput')
const chapterInput = document.querySelector('#chapterInput')
const verseInput = document.querySelector('#verseInput')
const content= document.querySelector('#passage')
const button = document.querySelector('#submitButton')


//Click is an event listener. event listeners takes a string as an argument.
button.addEventListener('click', async () => {

  let response = await axios.get(
    `https://bible-api.com/${bookInput.value} ${chapterInput.value}:${verseInput.value}`
  )
    //console.log(response.data) 
    content.innerText=response.data.verses[0].text
})


  //Fernando make passage = text. It should work

  // https://bible-api.com/${bookInput}:${chapterInput}:${verseInput}



  // //before I made changes
  // let response = await axios.get(
    //https://bible-api.com/john 3:16
  //   `https://bible-api.com/${bookInput}:${chapterInput}:${verseInput}`
  // )
  //   console.log(response) 

  //     bookInput2.innerHTML = bookInput3
  //     chapterInput2.innerHTML = chapterInput3
  //     verseInput2.innerHTML = verseInput3
  //     const text = (bookInput3, chapterInput3, verseInput3)
      
  //     const passage= document.getElementById("text")
      
  //     const result= (passage)
  //     console.log(result)

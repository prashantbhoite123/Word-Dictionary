const modalTitle = document.querySelector("#exampleModalLabel")
const modalBody = document.querySelector("#modalBody")

const form = document.querySelector("form")
const input = document.querySelector("input")

form.addEventListener("submit", async (e) => {
  console.log(input)
  e.preventDefault()
  const voice = new SpeechSynthesisUtterance()

  if (input.value === "vishal") {
    modalTitle.innerHTML = input.value
    modalBody.innerHTML = `Masa chi didi❤️`
    voice.text = input.value + modalBody.innerHTML
    window.speechSynthesis.speak(voice)
    return
  }
  if (input.value === "ganesh") {
    modalTitle.innerHTML = input.value
    modalBody.innerHTML = `NCC Student 🪖💪`
    voice.text = input.value + modalBody.innerHTML
    window.speechSynthesis.speak(voice)
    return
  }
  if (input.value === "prashant") {
    modalTitle.innerHTML = input.value
    modalBody.innerHTML = `Parshu Babu 😊`
    voice.text = input.value + modalBody.innerHTML
    window.speechSynthesis.speak(voice)
    return
  }
  if (input.value === "masa") {
    modalTitle.innerHTML = input.value
    modalBody.innerHTML = `vishal chi dada 😊`
    voice.text = input.value + modalBody.innerHTML
    window.speechSynthesis.speak(voice)
    return
  }
  try {
    const resoponce = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
    )
    const data = await resoponce.json()
    const meanings = data[0].meanings[0].definitions[0].definition
    const sourceUrl = data[0].sourceUrls[0]
    console.log(meanings)
    console.log(sourceUrl)
    if (meanings || sourceUrl) {
      modalTitle.innerHTML = `<span><h3>${input.value}</h3> <button"><i class="fa-solid fa-volume-high"></i></button></span>`
      modalBody.innerHTML = `<h4 class="text-warning">meanings / Defination</h4>
      <p>${meanings}</p><hr>
      <h4 class="text-warning">More</h4>
      <a href="${sourceUrl}">View More</a>
      
      `
    }
  } catch (error) {
    modalTitle.innerHTML = input.value
    modalBody.innerHTML = `Word Not Found`
  }
  const speech = new SpeechSynthesisUtterance()
  document.querySelector(".fa-solid ").addEventListener("click", (e) => {
    speech.text = input.value
    window.speechSynthesis.speak(speech)
  })
  input.innerHTML === ""
})

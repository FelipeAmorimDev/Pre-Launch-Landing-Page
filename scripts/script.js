const formElement = document.querySelector(".footer__form")
const emailFeedback = document.querySelector(".email__feedback")

const handleSubmit = (event) =>{
  event.preventDefault()
  const isValidEmail = formElement.email.validity.valid

  if(!isValidEmail){
    emailFeedback.classList.add("none")
    formElement.email.classList.add("outlineinput")
    return
    }

  emailFeedback.classList.remove("none")
  formElement.email.classList.remove("outlineinput")
  alert("cadastrado!")
}

formElement.addEventListener("submit",handleSubmit)

console.log(formElement)
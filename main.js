
// variables 
const formWrapper = document.querySelector('.form--wrapper')
const form = document.getElementById('form')

const cardholderText = document.querySelector('.card__holder')
const cardNumberText = document.querySelector('.card__number')
const cardExpirationDateText = document.querySelector('.card__expiration-date')
const expMMInputText = document.querySelector('.card__expiration-date .mm')
const expYYInputText = document.querySelector('.card__expiration-date .yy')
const securityCodeText = document.querySelector('.security-code')
const completedForm = document.querySelector('.complete-form')

const cardholderInput = document.getElementById('cardholder')
const cardNumberInput = document.getElementById('card-number')
const expMMInput = document.getElementById('exp-mm')
const expYYInput = document.getElementById('exp-yy')
const cvcInput = document.getElementById('cvc')

const cardholderWrapper = document.querySelector('.cardholder--wrapper')
const cardNumberWrapper = document.querySelector('.card-number--wrapper')
const expWrapper = document.querySelector('.exp--wrapper')
const cvcWrapper = document.querySelector('.cvc--wrapper')

const btnSubmit = document.querySelector('.btn--submit')
const completedBtn = document.querySelector('.completed-btn')


// functions 
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ")
}

function setCardholder(e) {
    cardholderValue = cardholderInput.value
    cardholderText.innerHTML = format(cardholderValue)
}

function setCardNumber(e) {
    cardNumberValue = cardNumberInput.value
    cardNumberText.innerHTML = format(cardNumberValue)
}

function setExpMonth(e) {
    expMonthValue = expMMInput.value
    expMMInputText.innerHTML = format(expMonthValue)
}

function setExpYearly(e) {
    expYearlyValue = expYYInput.value
    expYYInputText.innerHTML = format(expYearlyValue)
}
function setCardCVC(e) {
    cvcValue = cvcInput.value
    securityCodeText.innerHTML = format(cvcValue)
}


cardholderInput.addEventListener("keyup", e => {
    let key = e.key
    let keyLetters = e.target.value
  if (!cardholderInput.value) {
     cardholderWrapper.classList.add('error--active');
  } else if (keyLetters) {
    setCardholder()
  }
})

cardNumberInput.addEventListener("keyup", e => {
    let key = e.key
    let keyNumbers = e.target.value
  if (!cardNumberInput.value) {
     cardNumberWrapper.classList.add('error--active');
  } else if (keyNumbers) {
    setCardNumber()
  } else {
    // cardholderNameInput.setAttribute("disabled", "");
   cardNumberWrapper.classList.remove('error--active');
  }
})

expMMInput.addEventListener("keyup", e => {
    let key = e.key
    let keyNumbers = e.target.value
  if (!expMMInput.value) {
     expWrapper.classList.add('error--active');
  } else if (keyNumbers) {
    setExpMonth()
  } 
})

expYYInput.addEventListener("keyup", e => {
    let key = e.key
    let keyNumbers = e.target.value
  if (!expYYInput.value) {
     expWrapper.classList.add('error--active');
  } else if (keyNumbers) {
    setExpYearly()
  } 
})

cvcInput.addEventListener("keyup", e => {
    let key = e.key
    let keyNumbers = e.target.value
  if (!cvcInput.value) {
     cvcWrapper.classList.add('error--active');
  } else if (keyNumbers) {
    setCardCVC()
  } 
})

function completedFormFunc () {
  if (cardholderInput.value && cardNumberInput.value && expMMInput.value && expYYInput.value && cvcInput.value){
      completedForm.style.display = "block"
      formWrapper.style.display = "none"
  }
}

function resetCardText() {
    cardholderText.innerHTML = 'Jane Appleseed'
      cardNumberText.innerHTML = '0000 0000 0000 0000'
      expMMInputText.innerHTML  = '00'
      expYYInputText.innerHTML = '00'
      securityCodeText.innerHTML = '000'
}

function completedProcess() {
      completedForm.style.display = "none"
      formWrapper.style.display = "block"
      resetCardText() 
      form.reset()
}



btnSubmit.addEventListener("click", () => {
    if (!cardholderInput.value) {
         cardholderWrapper.classList.add('error--active');
  } else if (cardholderInput.value){
         cardholderWrapper.classList.remove('error--active');
  }
    if (!cardNumberInput.value && !cardNumberInput.value < 16) {
        cardNumberWrapper.classList.add('error--active');
  } else if (cardNumberInput.value){
        cardNumberWrapper.classList.remove('error--active');
  }
    if (!expMMInput.value || !expYYInput.value) {
        expWrapper.classList.add('error--active');
  } else if (expMMInput.value || expYYInput.value){
        expWrapper.classList.remove('error--active');
  }
    if (!cvcInput.value) {
        cvcWrapper.classList.add('error--active');
  } else if (cvcInput.value){
        cvcWrapper.classList.remove('error--active');
  } 

  completedFormFunc()

});

completedBtn.addEventListener('click', completedProcess)

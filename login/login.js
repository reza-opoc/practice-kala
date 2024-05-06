let inputElem = document.querySelector('.form__input')
let inputAlert = document.querySelector('.input__alert')



inputElem.addEventListener('blur', (event) => {
    if (event.target.value.length < 12) {
        inputAlert.style.display = 'block'
        inputAlert.style.color = 'red'
    }else {
        inputAlert.style.display = 'none'

    }
})
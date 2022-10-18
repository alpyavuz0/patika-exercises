let userForm = document.querySelector('#userForm')
userForm.addEventListener('submit', formControl)

const ALERT = document.querySelector('#alert')


function formControl(event) {
    event.preventDefault() 
    const USER_NAME = document.querySelector('#fname')
    const SCORE = document.querySelector('#score')


    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
        ALERT.innerHTML = alertFunction("Tebrikler", "Başarıyla Giriş Yaptınız", "success")


    } else {

        ALERT.innerHTML = alertFunction("Hata", "Eksik Bilgi Girdiniz", "danger")
    }
}

const alertFunction = (title , message, color) => 
    `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
    <strong>${title}!</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`



let userList =  document.querySelector('#userList')

const addItem = (userName, score) => {
        let liDOM = document.createElement('li')
        liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        liDOM.innerHTML = `
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>`
        userList.append(liDOM)
        localStorage.setItem(userName,score)
}
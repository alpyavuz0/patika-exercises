let userForm = document.querySelector('#userForm')
userForm.addEventListener('submit', formHandler)

const ALERT = document.querySelector('#alert')

const USER_NAME = document.querySelector('#fname')
const NAME_LINE = document.querySelector('#sname')
const E_MAIL = document.querySelector('#email')
const PASSWORD = document.querySelector('#sifre')



function formHandler(event) {
    event.preventDefault()

    if (USER_NAME.value && NAME_LINE.value && E_MAIL.value && PASSWORD.value) {
        addItem(USER_NAME.value,NAME_LINE.value,E_MAIL.value,PASSWORD.value)
        USER_NAME.value = ""
        NAME_LINE.value = ""
        E_MAIL.value = ""
        PASSWORD.value = ""

        ALERT.innerHTML = alertFunction("Tebrikler", "Başarılı bir şekilde kaydoldunuz","success")

    } else {

         ALERT.innerHTML = alertFunction("Hata!", "Kayıt Agacını Gözden Geciriniz", "danger")
    }
}

const  alertFunction = (title,message,color) => 
    `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
    <strong>${title}!</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`





let userList = document.querySelector('#userList')

const addItem = (userName,nameLine,email,password) => {
    let liDOM = document.createElement('li')
    liDOM.classList.add('list-group-item', 'list-group-item-warning', 'mt-3', 'forLi')
    liDOM.innerHTML = `
    Kullanıcı Adı : ${userName} <br>
    Ad-Soyad : ${nameLine} <br>
    E-mail : ${email} <br>`
    userList.append(liDOM)
    let time = new Date();
    let h = time.getHours()
    let m = time.getMinutes()
    m =  setTime(m)
   

    

    let checkTime = `${h}.${m}`

    let info = `
    Kullanıcı Adı : ${userName}
    Ad-Soyad : ${nameLine}
    E-mail : ${email}
    Sifre : ${password}`

    localStorage.setItem(checkTime,info)
    console.log(`${checkTime}  ${nameLine} Kaydoldu`)
} 

function setTime(i) {
    if ( i < 10) {
        i = "0" + i
    };
    return i;
}

var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$");
var enoughRegex = new RegExp("(?=.{8,}).*");

const RANGE = document.querySelector('#range')
let textRange = document.querySelector('#rangespan')
RANGE.value = 0;

function slide() {

    if (PASSWORD.value.length == 0) {
        RANGE.value = 0
        textRange.innerHTML = "Lütfen Şifre Belirleyiniz"
        textRange.style.color = "black"
    } else if ( false == enoughRegex.test(PASSWORD.value)) {
        RANGE.value = 1
        textRange.innerHTML = " Zayıf " 
        textRange.style.color = "red"
    } else if ( false == mediumRegex.test(PASSWORD.value)) {
        RANGE.value = 2
        textRange.innerHTML = "Orta"
        textRange.style.color = "orange"
    } else if (strongRegex.test(PASSWORD.value)) {
        RANGE.value = 3
        textRange.innerHTML = "Güçlü"
        textRange.style.color = "yellowgreen"
    } else if (PASSWORD.value.length > 24 && strongRegex.test(PASSWORD.value)) {
        RANGE.value = 4
        textRange.innerHTML = "Çok Güçlü"
        textRange.style.color = "green"
    } 
}

let icon = document.querySelector('#icon')

function showPassword() {
    PASSWORD.type = (PASSWORD.type == 'password' ? 'text' : 'password');
    icon.classList.toggle('fa-eye')
    icon.classList.toggle('fa-eye-slash')

}



function sameInput() {
    const snamespan = document.querySelector('#snamespan')

    if (NAME_LINE.value === USER_NAME.value) {
        snamespan.innerHTML = "Kullanıcı Adınız ile aynı olmamalıdır!!"
        snamespan.style.color = "red"
        NAME_LINE.style.borderColor = "red"
    } else {
        snamespan.innerHTML = " * Zorunlu Değildir"
        snamespan.style.color = "rgba(165, 164, 164, 0.9)"
        NAME_LINE.style.borderColor = "black"
    }
}





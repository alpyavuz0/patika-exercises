// What Is The Object Modal

// let new object
let newObject = {userName:"alpva", password:"qoqwejwoe", age:19}
console.log(newObject)

let personalInfo = new Object()
personalInfo.username = "alpva01"
personalInfo.age = 21
personalInfo.objective = "Random number queue"
console.log(personalInfo)

// complicate objects

// let user3 = prompt("Please write your username!")

let userInfo = {
    user1: {
        userName : "qlexus",
        age : 19,
        wallet : 220
    },
    user2: {
        userName: "armless",
        age: 22,
        wallet: 1200
    },
    
}

// console.log(userInfo.user3)

let userHead = document.querySelector('#userInfo')

function person(isim, yas) {
    this.isim = "isim";
    this.yas = "yas";
}

const USER_1 = new person(prompt("Please add your name"), prompt("Please add your age"))
localStorage.setItem("new user", USER_1)

userHead.innerHTML = JSON.stringify(localStorage.getItem("new user"))

    

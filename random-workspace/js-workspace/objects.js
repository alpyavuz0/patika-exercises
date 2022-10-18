const buttonDom = document.querySelector('.button-section')
const menuDom = document.querySelector('.menu-section')

let drinks = {
    Supreme: {
        id:1,
        class:"hot",
        cost:"12$",
        drinkName: "Espresso"
    },
    Special: {
        
        id:2,
        class:"cold",
        cost:"17$",
        drinkName: "Latte"
    },
    DoubleSupreme:{
        
        id:3,
        class:"hot",
        cost:"18$",
        drinkName: "Americano"
    },

    DoubleSpecial:{
        
        id:4,
        class:"cold",
        cost:"25$",
        drinkName: "Turkish Coffe"
    }
}


const buttonCreate = () => {
    let button = `
    <button id="all" class="btn btn-outline-dark btn-item" type="button">
    All
    </button>
    <button id="hot" class="btn btn-outline-dark btn-item" type="button">
    Hot Drinks
    </button>
    <button id="cold" class="btn btn-outline-dark btn-item" type="button">
    Cold Drinks
    </button>
    `

    buttonDom.innerHTML = button;
}

buttonCreate();


const menuItems = (item) => {
    let items = `
    <div class="menu-items col-lg-6 col-sm-12">
    <img class="photo" src="${item.img}" alt="${item.title}">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">${item.desc}</div>
    </div>
  </div>  
    `

    return items;
}

const allItems = () => {
    let all = "";

    menu.map(item => {
        all += menuItems(item)
    })

    all.innerHTML = menuDom
}

document.addEventListener("DOMContentLoaded", allItems)
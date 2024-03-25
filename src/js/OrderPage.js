const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const selectlingua = dropdown.querySelector('.selectlingua');
    const options = dropdown.querySelectorAll('.selectlingua li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        selectlingua.classList.toggle('selectlingua-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            selectlingua.classList.remove('selectlingua-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

/**********************************************************************************/

const wrapper = document.querySelector(".dropdown1"),
selectBtn = wrapper.querySelector(".select1");

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active1");
});

/**********************************************************************************/

let openShopping = document.querySelector('.shopping');
let cart2 = document.querySelector('.cart');
let close = document.querySelector('.close');

openShopping.addEventListener('click', ()=>{
    if(cart2.style.right == '-100%'){
        cart2.style.right = '0';
    }else {
        cart2.style.right = '-100%';
    }
})

close.addEventListener('click', ()=>{
    cart2.style.right = '-100%';
})

close.addEventListener('click', ()=>{
    cart2.classList.remove('active');
})

/**********************************************************************************/

const product = [
    {
        "id": 0,
        "name": "Adobong Manok",
        "price": 250,
        "image": "images/adobo.jpg"
    },
    {
        "id": 1,
        "name": "Bulalo",
        "price": 350,
        "image": "images/bulalo.jpg"
    },
    {
        "id": 2,
        "name": "Chicken Curry",
        "price": 250,
        "image": "images/Chicken-curry.jpg"
    },
    {
        "id": 3,
        "name": "Sisig",
        "price": 150,
        "image": "images/sisig.jpg"
    },
    {
        "id": 4,
        "name": "Fried Chicken",
        "price": 170,
        "image": "images/fried-chicken.jpg"
    },
    {
        "id": 5,
        "name": "Pancake",
        "price": 90,
        "image": "images/pancake.jpg"
    },
    {
        "id": 6,
        "name": "Tapsilog",
        "price": 120,
        "image": "images/tapsilog.jpg"
    }
    
];


const categories = [...new Set(product.map(item => item))];
let i = 0;
document.getElementById('listProduct').innerHTML = categories.map(item => {
    const { image, name, price } = item;
    return (
        `<div class="item">
            <img src=${image} alt="">
            <h2>${name}</h2>
            <div class="price">₱${price}.00</div>
            <div class="btnPrct">
                <button>View</button>
                <button onclick='addtocart(${JSON.stringify(item)})'>Add To Cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex !== -1) {
        // If item already in cart, increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item not in cart, add it with quantity 1
        cart.push({ ...item, quantity: 1 });
    }

    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function updateQuantity(index, change) {
    if (cart[index].quantity) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
    }
    displaycart();
}

function displaycart() {
    let totalQuantity = 0;
    let totalPrice = 0;

    document.getElementById("quantity").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('listCart').innerHTML = "";
    } else {
        document.getElementById("listCart").innerHTML = cart.map((product, index) => {
            const { image, name, price, quantity } = product;
            totalQuantity += quantity;
            totalPrice += price * quantity;
            return (
                `<div class="item1">
                    <img src=${image} alt="">
                    <div class="content">
                        <div class="name">
                            ${name}
                        </div>
                        <div class="price1">
                            ₱${price}/1 product
                        </div>
                    </div>
                    <div class="quantity">
                        <i class='fa-solid fa-trash-can' onclick='delElement(${index})'></i>
                        <button onclick='updateQuantity(${index}, -1)'>-</button>
                        <span class="value">${quantity}</span>
                        <button onclick='updateQuantity(${index}, 1)'>+</button>
                    </div>
                </div>`
            );
        }).join('');
    }

    document.getElementById("totalQuantity").innerText = totalQuantity;
}

    function updateOrderDetails() {
        const orderDetailsHTML = cart.map(product => {
            const { name, price, quantity } = product;
            return (
                `<div class="items">
                    <div class="names">${name}</div>
                    <div class="prices">₱${price}.00/1 product</div>
                    <div class="quantitys">x${quantity}</div>
                </div>`
            );
        }).join('');
    
        const totalAmountHTML = `
            <div class="totals">
                <h2>Total</h2>
                <h4>(incl. VAT)</h4>
                <div class="subtotal">₱ ${getTotalPrice().toFixed(2)}</div>
            </div>
        `;
    
        document.getElementById('listOrder').innerHTML = orderDetailsHTML + totalAmountHTML;
    }

    function getTotalPrice() {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    window.onload = updateOrderDetails;

/**********************************************************************************/

const product2 = [
    {
        "id": 0,
        "name": "Laing",
        "price": 50,
        "image": "images/laing.jpg"
    },
    {
        "id": 1,
        "name": "Pinakbet",
        "price": 50,
        "image": "images/pinakbet.jpg"
    },
    {
        "id": 2,
        "name": "Puso ng saging",
        "price": 70,
        "image": "images/pusongsaging.jpg"
    },
    {
        "id": 3,
        "name": "Ginisang Ampalaya",
        "price": 60,
        "image": "images/ginisang-ampalaya.jpg"
    },
    
];


const categories2 = [...new Set(product2.map(item => item))];
let b = 0;
document.getElementById('listProduct2').innerHTML = categories2.map(item => {
    const { image, name, price } = item;
    return (
        `<div class="item2">
            <img src=${image} alt="">
            <h2>${name}</h2>
            <div class="price2">₱${price}.00</div>
            <div class="btnPrct2">
                <button>View</button>
                <button onclick='addtocart(${JSON.stringify(item)})'>Add To Cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex !== -1) {
        // If item already in cart, increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item not in cart, add it with quantity 1
        cart.push({ ...item, quantity: 1 });
    }

    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function updateQuantity(index, change) {
    if (cart[index].quantity) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
    }
    displaycart();
}

function displaycart() {
    let totalQuantity = 0;
    document.getElementById("quantity").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('listCart').innerHTML = "";
    } else {
        document.getElementById("listCart").innerHTML = cart.map((product, index) => {
            const { image, name, price, quantity } = product;
            totalQuantity += quantity;
            return (
                `<div class="item1">
                    <img src=${image} alt="">
                    <div class="content">
                        <div class="name">
                            ${name}
                        </div>
                        <div class="price1">
                            ₱${price}/1 product
                        </div>
                    </div>
                    <div class="quantity">
                        <i class='fa-solid fa-trash-can' onclick='delElement(${index})'></i>
                        <button onclick='updateQuantity(${index}, -1)'>-</button>
                        <span class="value">${quantity}</span>
                        <button onclick='updateQuantity(${index}, 1)'>+</button>
                    </div>
                </div>`
            );
        }).join('');
    }

    document.getElementById("totalQuantity").innerText = totalQuantity;
}

/**********************************************************************************/

const product3 = [
    {
        "id": 0,
        "name": "Buko Pandan",
        "price": 30,
        "image": "images/Buko-pandan.jpg"
    },
    {
        "id": 1,
        "name": "Calamansi Juice",
        "price": 50,
        "image": "images/Calamansi.jpg"
    },
    {
        "id": 2,
        "name": "Kape Barako",
        "price": 70,
        "image": "images/kape-barako.jpg"
    },
    {
        "id": 3,
        "name": "Orange Juice",
        "price": 60,
        "image": "images/orange.jpg"
    },
    {
        "id": 4,
        "name": "San Miguel Beer",
        "price": 60,
        "image": "images/sanmig.jpg"
    },
    {
        "id": 5,
        "name": "Matcha",
        "price": 60,
        "image": "images/matcha.jpg"
    },
    
];


const categories3 = [...new Set(product3.map(item => item))];
let c = 0;
document.getElementById('listProduct3').innerHTML = categories3.map(item => {
    const { image, name, price } = item;
    return (
        `<div class="item3">
            <img src=${image} alt="">
            <h2>${name}</h2>
            <div class="price3">₱${price}.00</div>
            <div class="btnPrct3">
                <button>View</button>
                <button onclick='addtocart(${JSON.stringify(item)})'>Add To Cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex !== -1) {
        // If item already in cart, increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item not in cart, add it with quantity 1
        cart.push({ ...item, quantity: 1 });
    }

    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function updateQuantity(index, change) {
    if (cart[index].quantity) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
    }
    displaycart();
}

function displaycart() {
    let totalQuantity = 0;
    document.getElementById("quantity").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('listCart').innerHTML = "";
    } else {
        document.getElementById("listCart").innerHTML = cart.map((product, index) => {
            const { image, name, price, quantity } = product;
            totalQuantity += quantity;
            return (
                `<div class="item1">
                    <img src=${image} alt="">
                    <div class="content">
                        <div class="name">
                            ${name}
                        </div>
                        <div class="price1">
                            ₱${price}/1 product
                        </div>
                    </div>
                    <div class="quantity">
                        <i class='fa-solid fa-trash-can' onclick='delElement(${index})'></i>
                        <button onclick='updateQuantity(${index}, -1)'>-</button>
                        <span class="value">${quantity}</span>
                        <button onclick='updateQuantity(${index}, 1)'>+</button>
                    </div>
                </div>`
            );
        }).join('');
    }

    document.getElementById("totalQuantity").innerText = totalQuantity;
}

/**********************************************************************************/

const product4 = [
    {
        "id": 0,
        "name": "Plain Rice",
        "price": 15,
        "image": "images/Plain-rice.jpg"
    },
    {
        "id": 1,
        "name": "Garlic Rice",
        "price": 20,
        "image": "images/Garlic-rice.jpg"
    },
    {
        "id": 2,
        "name": "Java Rice",
        "price": 20,
        "image": "images/Java-rice.jpg"
    },
    {
        "id": 3,
        "name": "Halo-halo",
        "price": 25,
        "image": "images/halohalo.jpg"
    },
    
];


const categories4 = [...new Set(product4.map(item => item))];
let d = 0;
document.getElementById('listProduct4').innerHTML = categories4.map(item => {
    const { image, name, price } = item;
    return (
        `<div class="item4">
            <img src=${image} alt="">
            <h2>${name}</h2>
            <div class="price4">₱${price}.00</div>
            <div class="btnPrct4">
                <button>View</button>
                <button onclick='addtocart(${JSON.stringify(item)})'>Add To Cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex !== -1) {
        // If item already in cart, increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item not in cart, add it with quantity 1
        cart.push({ ...item, quantity: 1 });
    }

    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function updateQuantity(index, change) {
    if (cart[index].quantity) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
    }
    displaycart();
}

function displaycart() {
    let totalQuantity = 0;
    document.getElementById("quantity").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('listCart').innerHTML = "";
    } else {
        document.getElementById("listCart").innerHTML = cart.map((product, index) => {
            const { image, name, price, quantity } = product;
            totalQuantity += quantity;
            return (
                `<div class="item1">
                    <img src=${image} alt="">
                    <div class="content">
                        <div class="name">
                            ${name}
                        </div>
                        <div class="price1">
                            ₱${price}/1 product
                        </div>
                    </div>
                    <div class="quantity">
                        <i class='fa-solid fa-trash-can' onclick='delElement(${index})'></i>
                        <button onclick='updateQuantity(${index}, -1)'>-</button>
                        <span class="value">${quantity}</span>
                        <button onclick='updateQuantity(${index}, 1)'>+</button>
                    </div>
                </div>`
            );
        }).join('');
    }

    document.getElementById("totalQuantity").innerText = totalQuantity;
}

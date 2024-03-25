
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
/******************************* Function for card ********************************/
/**********************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const listContainer = document.querySelector(".list2");

    let totalPrice = 0; // Initialize the total price variable

    cart.forEach((product) => {
        const { image, name, price, quantity } = product;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("items2");

        const itemPrice = price * quantity;
        totalPrice += itemPrice; // Update the total price

        itemDiv.innerHTML = `
            <img src="${image}" alt="">
            <div class="info2">
                <div class="name2">${name}</div>
                <div class="price2">₱${price.toFixed(2)}</div>
            </div>
            <div class="quantity2">x${quantity}</div>
            <div class="returnPrice">₱${itemPrice.toFixed(2)}</div>
        `;

        listContainer.appendChild(itemDiv);
    });

    // Display the total price
    const totalsContainer = document.querySelector(".totals2");
    totalsContainer.innerHTML = `
        <h2>Total</h2>
        <h4>(incl. VAT)</h4>
        <div class="subtotal">₱ ${totalPrice.toFixed(2)}</div>
    `;

    const finalsContainer = document.querySelector(".totals3");
    finalsContainer.innerHTML = `
        <h2>Total</h2>
        <h4>(incl. VAT)</h4>
        <div class="subtotal3">₱ ${totalPrice.toFixed(2)}</div>
    `;

});

/**********************************************************************************/
/******************************* Form Error ***************************************/
/**********************************************************************************/




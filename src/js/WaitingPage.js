
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

const targetTime = new Date();
targetTime.setMinutes(targetTime.getMinutes() + 30);
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('hours').textContent = '00  :';
        document.getElementById('minutes').textContent = '00  :';
        document.getElementById('seconds').textContent = '  00';
    } else {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('hours').textContent = padZero(hours);
        document.getElementById('minutes').textContent = padZero(minutes);
        document.getElementById('seconds').textContent = padZero(seconds);
    }
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

/*************************************************************************************
 * ***********************************************************************************
 *************************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve values from sessionStorage
    var fullName = sessionStorage.getItem('fullName');
    var phone = sessionStorage.getItem('phone');
    var email = sessionStorage.getItem('email');
    var floor = sessionStorage.getItem('floor');
    var unitNo = sessionStorage.getItem('unitNo');
    var message = sessionStorage.getItem('message');

    // Update content of info5
    document.querySelector('.fullname5').textContent = 'Full Name: ' + fullName;
    document.querySelector('.phonenum5').textContent = 'Phone No.: ' + phone;
    document.querySelector('.email5').textContent = 'Email: ' + email;
    document.querySelector('.unit5').textContent = 'Unit No.: ' + unitNo;
    document.querySelector('.note5').textContent = 'Note: ' + message;

    // ... (other existing code)
});


/*************************************************************************************
 * ***********************************************************************************
 *************************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const listContainer = document.querySelector(".list3");

    let totalPrice = 0; // Initialize the total price variable

    cart.forEach((product) => {
        const { name, price, quantity } = product;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("items3");

        const itemPrice = price * quantity;
        totalPrice += itemPrice; // Update the total price

        itemDiv.innerHTML = `
            <div class="info3">
                <div class="name3">${name}</div>
                <div class="price3">₱${price.toFixed(2)}</div>
                <div class="quantity3">x${quantity}</div>
            </div>
        `;

        listContainer.appendChild(itemDiv);
    });

    const totalsContainer = document.querySelector(".totals2");
    totalsContainer.innerHTML = `
        <h2>Total</h2>
        <h4>(incl. VAT)</h4>
        <div class="subtotal">₱ ${totalPrice.toFixed(2)}</div>
    `;
});

/*************************************************************************************
 * ***********************************************************************************
 *************************************************************************************/

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".bot");
const chatToggler = document.querySelector(".chat-toggle");

let userMessage;
const API_KEY = "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";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<img src="CND2.png" alt=""><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0301",
            messages: [{role: "user", content: userMessage}]
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageElement.textContent = "Thanks for your message. Our server is currently experiencing issues, causing delays in responses. We're working on fixing it. Your patience is appreciated. Apologies for any inconvenience.";
    })
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";

    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    chatBox.scrollTo(0, chatBox.scrollHeight);

    setTimeout(() => {

        const incomingChatLi = createChatLi("Replying...", "incoming");
        chatBox.appendChild(incomingChatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
        generateResponse(incomingChatLi);
    } ,600);
}

sendChatBtn.addEventListener("click", handleChat);
chatToggler.addEventListener("click", () => document.body.classList.toggle("show-chat"));
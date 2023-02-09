let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let currencyEUR = 4.6946;
let currencyUSD = 4.3398;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / currencyEUR;
            break;
        case "USD":
            result = amount / currencyUSD;
    }

    resultElement.innerText = result.toFixed(2);

});
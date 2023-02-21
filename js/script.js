{
    const calculateResult = (amount, currency) => {
        const currencyEUR = 4.6946;
        const currencyUSD = 4.3398;

        switch (currency) {
            case "EUR":
                return amount / currencyEUR;

            case "USD":
                return amount / currencyUSD;
        }
    };

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = result.toFixed(2);
};

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}
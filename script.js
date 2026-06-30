const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real á Converter
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas já Convertida

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = 7.2
    const bitcoinToday = data.BTCBRL.high

    if (currencySelect.value == "dolar") {
        // se select estiver selecionado o valor de dolar, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        // se select estiver selecionado o valor de euro, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        // se select estiver selecionado o valor de libra, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

if (currencySelect.value == "bitcoin") {
    // se selecionado Bitcoin, formatamos manualmente com símbolo ₿ e 6 casas decimais
    const bitcoinValue = inputCurrencyValue / bitcoinToday
    currencyValueToConverted.innerHTML = `₿ ${bitcoinValue.toFixed(6)}`
}

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}



function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')
    const currencyLibra = document.getElementById('.currency-libra')
    const currencybitcoin = document.getElementById('.currency-bitcoin')

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'
    }

    convertValues()

}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)



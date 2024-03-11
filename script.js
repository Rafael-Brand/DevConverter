const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit (e) {
    e.preventDefault();
    

    if(!inputValue.value || inputValue.Value < 0 ) {
        alert('Informe um valor correto!');
        return;
    } else if(!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }

    converter();
}

function converter() {
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value * 5.36;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');

        animateResult();

    } else if (selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value * 4.95;
        result.innerHTML = valueFormatter('en-US', 'USD');

        animateResult();

    } else if (selectedCurrency.value === 'yen') {
        valueConverted = inputValue.value *0.033;
        result.innerHTML = valueConverted;

        animateResult();

    } else if (selectedCurrency.value === 'DinarK') {
        valueConverted = inputValue.value * 16.08;
        result.innerHTML = valueConverted;

        animateResult();

    } else if (selectedCurrency.value === 'RialI') {
        valueConverted = inputValue.value * 0.00012;
        result.innerHTML = valueConverted;

        animateResult();
    }

    inputValue.value = '';
    selectedCurrency.value = '';

}

function valueFormatter (Locale, currency ) {
    const value = valueConverted.toLocaleString(`${Locale}`, {style: 'currency', currency: `${currency}`} );
    return `<span>🤑</span> ${value} <span>🤑</span>`
}

function animateResult (){
    return result.animate ([
        {transform: 'translateY(-150px'},
        {transform: 'translateY(0px'},
    ], {  duration: 500})
}
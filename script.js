const input = document.querySelector('.input');
const convertBtn = document.querySelector('.convert-btn');
const result = document.querySelector('.result');

convertBtn.addEventListener('click', ()=> {
    const inputValue = input.value;
    const binary = parseInt(inputValue, 2);

    if (!/^[01]+$/.test(inputValue)){
        result.innerHTML = 'Enter a valid number';
    }
    else {
        result.innerHTML = `Decimal: ${binary}`;
    }
});
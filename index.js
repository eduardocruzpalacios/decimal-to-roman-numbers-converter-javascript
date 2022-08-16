import { DecimalToRoman } from './converter/DecimalToRomanConverter.js';

const decimalEl = document.getElementById('decimal');
const romanEl = document.getElementById('roman');

const ConvertAndPrint = () => {
  try {
    const decimal = Number(decimalEl.value);
    const roman = DecimalToRoman(decimal);
    romanEl.classList.remove('text-danger');
    romanEl.value = roman;
  } catch (error) {
    const ERROR_MESSAGE = 'number must be less than 4000';
    romanEl.classList.add('text-danger');
    romanEl.value = ERROR_MESSAGE;
  }
};

decimalEl.addEventListener('input', ConvertAndPrint);

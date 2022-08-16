import { DecimalToRoman } from './converter/DecimalToRomanConverter.js';

const decimalEl = document.getElementById('decimal');
const romanEl = document.getElementById('roman');

const ConvertAndPrint = () => {
  const decimal = Number(decimalEl.value);
  const roman = DecimalToRoman(decimal);
  romanEl.value = roman;
};

decimalEl.addEventListener('input', ConvertAndPrint);

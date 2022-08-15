import { DecimalToRoman } from "./modules/converter.js";

const decimalEl = document.getElementById('decimal');
const romanEl = document.getElementById('roman');

decimalEl.addEventListener('input', ConvertAndPrint);

function ConvertAndPrint() {
    const decimal = Number(decimalEl.value);
    const roman = DecimalToRoman(decimal);
    romanEl.value = roman;
}

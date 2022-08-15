const decimalEl = document.getElementById('decimal');
const romanEl = document.getElementById('roman');

decimalEl.addEventListener('input', ConvertAndPrint);

function ConvertAndPrint() {
    const decimal = Number(decimalEl.value);
    const roman = DecimalToRoman(decimal);
    romanEl.value = roman;
}

function DecimalToRoman(decimal) {
    let roman = '';
    let quotient = decimal;
    let remainder = decimal;

    if (remainder > 3999) {
        return 'error: > 3999';
    } else if (remainder / 1000 >= 1) {
        quotient = remainder / 1000;
        remainder %= 1000;
        if (quotient >= 3) {
            roman += 'MMM';
        } else if (quotient >= 2) {
            roman += 'MM';
        } else {
            roman += 'M';
        }
    }

    // CM - D - CD
    if (remainder / 900 >= 1) {
        remainder %= 900;
        roman += 'CM';
    } else if (remainder / 500 >= 1) {
        remainder %= 500;
        roman += 'D';
    } else if (remainder / 400 >= 1) {
        remainder %= 400;
        roman += 'CD';
    }

    // CCC - CC - C
    if (remainder / 100 >= 1) {
        quotient = remainder / 100;
        remainder %= 100;
        if (quotient >= 3) {
            roman += 'CCC';
        } else if (quotient >= 2) {
            roman += 'CC';
        } else {
            roman += 'C';
        }
    }

    // XC - L - XL
    if (remainder / 90 >= 1) {
        remainder %= 90;
        roman += 'XC';
    } else if (remainder / 50 >= 1) {
        remainder %= 50;
        roman += 'L';
    } else if (remainder / 40 >= 1) {
        remainder %= 40;
        roman += 'XL';
    }

    // XXX - XX - X
    if (remainder / 10 >= 1) {
        quotient = remainder / 10;
        remainder %= 10;
        if (quotient >= 3) {
            roman += 'XXX';
        } else if (quotient >= 2) {
            roman += 'XX';
        } else {
            roman += 'X';
        }
    }

    // IX - V - IV
    if (remainder / 9 >= 1) {
        remainder %= 9;
        roman += 'IX';
    } else if (remainder / 5 >= 1) {
        remainder %= 5;
        roman += 'V';
    } else if (remainder / 4 >= 1) {
        remainder %= 4;
        roman += 'IV';
    }

    // III - II - I
    if (remainder / 1 >= 1) {
        quotient = remainder / 1;
        remainder %= 1;
        if (quotient >= 3) {
            roman += 'III';
        } else if (quotient >= 2) {
            roman += 'II';
        } else {
            roman += 'I';
        }
    }

    return roman;
}
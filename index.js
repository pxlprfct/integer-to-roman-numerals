const isANumber = (input) => {
  if (Number.isNaN(input)) { throw new TypeError(`parameter (${input}) is not a number`); }
};

const isBetween = (min, max, input) => {
  if (input < min || input > max) { throw new RangeError(`parameter (${input}) is out of range (0 - ${max})`); }
};

const integerToRomanNumeral = (integer) => {
  // NOTE: _needs_ to be in descending order
  const NUMERALS = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let input = parseInt(integer, 10);

  isANumber(input);
  isBetween(0, 3999, input);

  if (input === 0) {
    return 'N';
  }

  // chunks the input down by the largest whole number that fits into it
  // any remainder gets retained, and gets chunked down again
  return NUMERALS.reduce((acc, numeral) => {
    const [number, letter] = numeral;
    acc.push(letter.repeat(input / number));
    input %= number;
    return acc;
  }, []).join('');
};

// NOTE: I saw this a few years ago - it's quite a cool way to solve the problem
// it changes it into a text manipulation/symbol problem instead of a numerical one
// I can't take credit for it - but I thought I'd share
// https://youtu.be/nrVIlhtoE3Y?t=38m40s
// Declarative Thinking, Declarative Practice - Kevlin Henney
const integerToRomanNumeralRegex = (integer) => {
  if (integer === 0) {
    return 'N';
  }

  return 'I'.repeat(integer)
    .replace(/IIIII/g, 'V')
    .replace(/IIII/g, 'IV')
    .replace(/VV/g, 'X')
    .replace(/VIV/g, 'IX')
    .replace(/XXXXX/g, 'L')
    .replace(/XXXX/g, 'XL')
    .replace(/LL/g, 'C')
    .replace(/LXL/g, 'XC')
    .replace(/CCCCC/g, 'D')
    .replace(/CCCC/g, 'CD')
    .replace(/DD/g, 'M')
    .replace(/DCD/g, 'CM');
};

module.exports = {
  integerToRomanNumeral,
  integerToRomanNumeralRegex,
};

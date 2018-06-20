const integerToRomanNumeral = (integer) => {
  // NOTE: _needs_ to be in descending order
  const numerals = [
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
  const MAX = 3999;

  if (Number.isNaN(input)) {
    throw new TypeError(`parameter (${input}) is not a number`);
  }

  if (input < 0 || input > MAX) {
    throw new RangeError(`parameter (${input}) is out of range (0 - ${MAX})`);
  }

  if (input === 0) {
    return 'N';
  }

  const result = (() => {
    let r = '';
    // chunks the input down by the largest whole number that fits into it
    // any remainder gets retained, and gets chunked down again
    numerals.forEach((o) => {
      const number = o[0]; // 1000
      const letter = o[1]; // 'M'

      // 3007 / 1000('M') = 3
      // 'M' * 3 = 'MMM'
      r += letter.repeat(input / number);
      // 3007 % 1000 = 7
      // 7 = 5 ('V') += 1 ('I') += 1 ('I')
      input %= number;
    });

    // MMMVII
    return r;
  })();

  return result;
};

// Note: i saw this a few years ago - it's quite a cool way to solve the problem
//       it changes it into a text manipulation/symbol problem instead of a numerical one
//       i can't take credit for it - as it's not mine, but I thought I'd share
//       https://youtu.be/nrVIlhtoE3Y?t=38m40s
//       Declarative Thinking, Declarative Practice - Kevlin Henney
//
// const integerToRomanNumeral = integer =>
//   'I'.repeat(integer)
//     .replace(/IIIII/g, 'V')
//     .replace(/IIII/g, 'IV')
//     .replace(/VV/g, 'X')
//     .replace(/VIV/g, 'IX')
//     .replace(/XXXXX/g, 'L')
//     .replace(/XXXX/g, 'XL')
//     .replace(/LL/g, 'C')
//     .replace(/LXL/g, 'XC')
//     .replace(/CCCCC/g, 'D')
//     .replace(/CCCC/g, 'CD')
//     .replace(/DD/g, 'M')
//     .replace(/DCD/g, 'CM');

module.exports = {
  integerToRomanNumeral,
};

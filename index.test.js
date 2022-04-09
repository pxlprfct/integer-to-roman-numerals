/* eslint-env node, mocha */
const should = require('chai').should();
const { integerToRomanNumeral, integerToRomanNumeralRegex } = require('./index.js');

describe('integerToRomanNumeral()', () => {
  // edgecase/breaking checks
  it('should throw without parameter', () => should.throw(() => { integerToRomanNumeral(); }));
  it('should throw if parameter is NaN', () => should.throw(() => { integerToRomanNumeral('acb'); }));
  it('should throw if parameter is less than 0', () => should.throw(() => { integerToRomanNumeral(-1); }));
  it('should throw if parameter is more than 3999', () => should.throw(() => { integerToRomanNumeral(4000); }));
  it('should return a string', () => integerToRomanNumeral(1).should.be.a('string'));

  // 'functionality' tests
  it('0 should return "N"', () => integerToRomanNumeral(0).should.equal('N'));
  it('1 should return "I"', () => integerToRomanNumeral(1).should.equal('I'));
  it('5 should return "V"', () => integerToRomanNumeral(5).should.equal('V'));
  it('10 should return "X"', () => integerToRomanNumeral(10).should.equal('X'));
  it('20 should return "XX"', () => integerToRomanNumeral(20).should.equal('XX'));
  it('3999 should return "MMMCMXCIX"', () => integerToRomanNumeral(3999).should.equal('MMMCMXCIX'));
});

describe('integerToRomanNumeralRegex()', () => {
  // edgecase/breaking checks
  it('should return a string', () => integerToRomanNumeralRegex(1).should.be.a('string'));

  // 'functionality' tests
  it('0 should return "N"', () => integerToRomanNumeralRegex(0).should.equal('N'));
  it('1 should return "I"', () => integerToRomanNumeralRegex(1).should.equal('I'));
  it('5 should return "V"', () => integerToRomanNumeralRegex(5).should.equal('V'));
  it('10 should return "X"', () => integerToRomanNumeralRegex(10).should.equal('X'));
  it('20 should return "XX"', () => integerToRomanNumeralRegex(20).should.equal('XX'));
  it('3999 should return "MMMCMXCIX"', () => integerToRomanNumeralRegex(3999).should.equal('MMMCMXCIX'));
});

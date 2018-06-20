/* eslint-env node, mocha */
const should = require('chai').should();
const app = require('./app.js');

// _just_ to make sure
describe('app.js', () => {
  it('should exist', () => should.exist(app));
});

describe('app.integerToRomanNumeral()', () => {
  // edgecase/breaking checks
  it('should throw without parameter', () => should.throw(() => { app.integerToRomanNumeral(); }));
  it('should throw if parameter is NaN', () => should.throw(() => { app.integerToRomanNumeral('acb'); }));
  it('should throw if parameter is less than 0', () => should.throw(() => { app.integerToRomanNumeral(-1); }));
  it('should throw if parameter is more than 3999', () => should.throw(() => { app.integerToRomanNumeral(4000); }));
  it('should return a string', () => app.integerToRomanNumeral(1).should.be.a('string'));

  // 'functionality' tests
  it('0 should return "N"', () => app.integerToRomanNumeral(0).should.equal('N'));
  it('1 should return "I"', () => app.integerToRomanNumeral(1).should.equal('I'));
  it('5 should return "V"', () => app.integerToRomanNumeral(5).should.equal('V'));
  it('10 should return "X"', () => app.integerToRomanNumeral(10).should.equal('X'));
  it('20 should return "XX"', () => app.integerToRomanNumeral(20).should.equal('XX'));
  it('3999 should return "MMMCMXCIX"', () => app.integerToRomanNumeral(3999).should.equal('MMMCMXCIX'));
});

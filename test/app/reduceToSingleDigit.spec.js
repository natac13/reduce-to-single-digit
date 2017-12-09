import { expect } from 'chai';

import reduceToSingleDigit from '../../app/index.js';

describe('Reduction of a Number to Signle Digit Form', () => {
  it('should return false when not given a number', () => {
    const value = 'Hello';
    const actual = reduceToSingleDigit(value);
    expect(actual).to.be.an('error');
  });

  it('should return 6 when given the number 15', () => {
    const value = 15;
    const expected = 6;
    const actual = reduceToSingleDigit(value);
    expect(actual).to.equal(expected);
  });

  it('Should return 6 when given the value of 96 -> 15', () => {
    const value = 96;
    const expected = 6;
    const actual = reduceToSingleDigit(value);
    expect(actual).to.equal(expected);
  });

  it('Should return 3 when given the value of 12', () => {
    const value = 12;
    const expected = 3;
    const actual = reduceToSingleDigit(value);
    expect(actual).to.equal(expected);
  });

  it('Should return 9 when given the value of 18', () => {
    const value = 18;
    const expected = 9;
    const actual = reduceToSingleDigit(value);
    expect(actual).to.equal(expected);
  });

  it('Should return 3 when given the value of 552 -> 12', () => {
    const value = 552;
    const expected = 3;
    const actual = reduceToSingleDigit(value);
    expect(actual).to.equal(expected);
  });
});

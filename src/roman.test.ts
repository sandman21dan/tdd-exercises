import { romanToDecimal, getSingleDecimalFromRoman } from './roman';

it('can convert I to 1', () => {
  expect(romanToDecimal('I')).toEqual(1);
});

it('can convert III to 3', () => {
  expect(romanToDecimal('III')).toEqual(3);
});

it('can convert V to 5', () => {
  expect(romanToDecimal('V')).toEqual(5);
});

it('can convert VI to 6', () => {
  expect(romanToDecimal('VI')).toEqual(6);
});

it('can convert VIII to 8', () => {
  expect(romanToDecimal('VIII')).toEqual(8);
});

it('can convert IV to 4', () => {
  expect(romanToDecimal('IV')).toEqual(4);
});

it('can convert IX to 9', () => {
  expect(romanToDecimal('IX')).toEqual(9);
});

it('converts advanced roman numbers to decimal', () => {
  expect(romanToDecimal('MMVI')).toEqual(2006);
});

it('converts more advanced roman numbers to decimal', () => {
  expect(romanToDecimal('MCMXLIV')).toEqual(1944);
});

it('converts more advanced roman numbers to decimal', () => {
  expect(romanToDecimal('LXXXVIII')).toEqual(88);
});

it('converts more advanced roman numbers to decimal', () => {
  expect(romanToDecimal('CMXCIX')).toEqual(999);
});

describe('get single roman number', () => {
  it('gets I', () => {
    expect(getSingleDecimalFromRoman('I')).toEqual(1)
  });

  it('gets 5', () => {
    expect(getSingleDecimalFromRoman('V')).toEqual(5)
  });

  it('gets 10', () => {
    expect(getSingleDecimalFromRoman('X')).toEqual(10)
  });

  it('defaults to 0', () => {
    expect(getSingleDecimalFromRoman('sadklfjasdklfjsadklf')).toEqual(0);
  })
});

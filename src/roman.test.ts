import { romanToDecimal } from './roman';

it('converts advanced roman numbers to decimal', () => {
  expect(romanToDecimal('MMVI')).toEqual(2006);
});

it('converts more advanced roman numbers to decimal', () => {
  expect(romanToDecimal('MCMXLIV')).toEqual(1944);
});

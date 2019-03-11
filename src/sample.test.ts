import { sample } from './sample';

it('passes', () => {
  expect(true).toEqual(true);
});

it('uses the function', () => {
  expect(sample(13)).toEqual(13);
});

it('uses the function with a string', () => {
  const testString = 'asdfzxcv';
  expect(sample(testString)).toEqual(testString);
});

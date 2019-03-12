export function getSingleDecimalFromRoman (char: string) {
  switch (char) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0;
  }
}

export function romanToDecimal (rom: string) {
  const romList = rom.split('');
  const decList = romList.map(letter => {
    return getSingleDecimalFromRoman(letter);
  });

  let acum = 0;

  decList.forEach((num, index, arr) => {
    if (num !== 0 && num < arr[index + 1])  {
      acum += arr[index + 1] - num;
      arr[index + 1] = 0;
    } else {
      acum += num;
    }
  });

  return acum;
}

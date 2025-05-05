function findNumbers() {
  const result = [];
  for (let i = 0; i <= 9999; i++) {
      const numStr = String(i).padStart(4, '0');
      const digit1 = parseInt(numStr[0]);
      const digit2 = parseInt(numStr[1]);
      const digit3 = parseInt(numStr[2]);
      const digit4 = parseInt(numStr[3]);

      const diff1 = Math.abs(digit1 - digit2) === 1 || Math.abs(digit1 - digit2) === 9;
      const diff2 = Math.abs(digit2 - digit3) === 1 || Math.abs(digit2 - digit3) === 9;
      const diff3 = Math.abs(digit3 - digit4) === 1 || Math.abs(digit3 - digit4) === 9;

      if (diff1 && diff2 && diff3) {
          result.push(numStr);
      }
  }
  return result;
}

const numbers = findNumbers();
console.log(numbers);

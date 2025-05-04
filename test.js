import {range, chunk, padStart, groupBy, sumBy , reduce, flatMap, map, difference } from 'lodash-es'

console.log(Array.from(new Set([1,2,3,4,12,3,4,5])))

console.log(typeof padStart(1200, 4, '0'))

// const a1 = 'aaa'
// const aa = new Map()
// console.log(aa)
// console.log((['a1']))
// console.log(chunk(range(100),10))
// console.log(range(100))
// let n = -1
// let str = '19'
// console.log('口XX口'.replace(/口/g,function (...args) {
//   console.log(args)
//   n++
//   return str[n]
// }))

// '口XX口'.replace('口X')

// const str = 'abacad';

// // 使用正则表达式匹配字符 'a'
// const result = str.replace(/a/g, (match, offset, string) => {
//   // 计算当前 'a' 的出现次数
//   const count = (string.match(/a/g) || []).length;
//   // 返回对应的数字
//   return count;
// });

// console.log(result); // 输出：1b2c3d
// const units = ['仟','佰','拾','个']
// export function getZhUnit(chars = '口X口X') {
//   return chars.split('').reduce((before, char, index) => {
//     if(char === '口') {
//       before.push(units[index])
//     }
//     return before
//   }, [])
// }
// console.log(getZhUnit())

// const array = [
//   { name: 'apple', value: 10 },
//   { name: 'banana', value: 20 },
//   { name: 'apple', value: 30 },
//   { name: 'orange', value: 40 },
//   { name: 'banana', value: 50 },
//   { name: 'orange', value: 60 }
// ];


// const group = groupBy(array, 'name')
// const result = Object.keys(group).map(key => {
//   return {
//     name:key,
//     value: sumBy(group[key], 'value')
//   }
// })
// // .map(group => {
// //   return {
// //     name: group[0].name,
// //     value: sumBy(group, 'value')
// //   }
// // })
//   // .map(group => ({
//   //   name: group[0].name,
//   //   value: sumBy(group, 'value')
//   // }))
//   // .value();

// console.log(result);



// function getPermutations(string) {
//   if (string.length === 1) {
//     return [string];
//   }

//   let permutations = [];
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
//     let remainingPermutations = getPermutations(remainingString);

//     for (let j = 0; j < remainingPermutations.length; j++) {
//       permutations.push(char + remainingPermutations[j]);
//     }
//   }

//   return permutations;
// }

// console.log(getPermutations('12'))


function cartesianProduct(arrays) {
  return reduce(arrays, (result, currentArray) => {
      return flatMap(result, (previousValue) => {
          return map(currentArray, (currentValue) => {
              return previousValue.concat(currentValue);
          });
      });
  }, [[]]);
}

function getCombinations(...strings) {
  const charArrays = strings.map(str => str.split(''));
  const product = cartesianProduct(charArrays);
  return product.map(combination => combination.join(''));
}

const str1 = '12345678';
const str2 = '12345678';
const str3 = '4567';
const str4 = '7890';
// const resultOne = getCombinations(str1);
const resultTwo = getCombinations(str1, str2);
const resultThree = getCombinations(str1, str2, str3);
const resultFour = getCombinations(str1, str2, str3, str4);
// console.log("一个字符串的组合结果：", resultOne);
console.log("两个字符串的组合结果：", resultTwo);
console.log("三个字符串的组合结果：", resultThree);
console.log("四个字符串的组合结果：", resultFour);

console.log(difference(range(10), [1,2,3]))


// const generateAllCombinations = (digitArrays) => {
//   return digitArrays.reduce((acc, currentDigits) => {
//       if (acc.length === 0) {
//           return currentDigits.map(digit => `${digit}`);
//       }
//       return acc.flatMap(prevCombination => currentDigits.map(digit => `${prevCombination}${digit}`));
//   }, []);
// };
// console.log(generateAllCombinations([['1','2','3'],['X'],['1','2','3'],['1','2','3']],))


// function generateAllCombinations(...args)  {
//   if (args.length !==4) return new Error('入参必须为4位')
//   const digitArrays = args.map(nums => (nums ? nums.split('') : ['X']))
//   return digitArrays.reduce((acc, currentDigits) => {
//       if (acc.length === 0) {
//           return currentDigits.map(digit => `${digit}`);
//       }
//       return acc.flatMap(prevCombination => currentDigits.map(digit => `${prevCombination}${digit}`));
//   }, []);
// };
// console.log(generateAllCombinations('1234','1234','1234','1234'))

// function  getPermutations(string) {
//   if (string.length === 1) {
//     return [string];
//   }

//   let permutations = [];
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
//     let remainingPermutations = getPermutations(remainingString);

//     for (let j = 0; j < remainingPermutations.length; j++) {
//       permutations.push(char + remainingPermutations[j]);
//     }
//   }

//   return permutations;
// }
function getPermutations(string) {
  if (string.length === 0) return [];
  if (string.length === 1) return [string];

  let result = [];
  let stack = [{ str: string, prefix: '' }];

  while (stack.length > 0) {
      let { str, prefix } = stack.pop();
      if (str.length === 0) {
          result.push(prefix);
      } else {
          for (let i = 0; i < str.length; i++) {
              let newPrefix = prefix + str[i];
              let newStr = str.slice(0, i) + str.slice(i + 1);
              stack.push({ str: newStr, prefix: newPrefix });
          }
      }
  }

  return result;
}
console.log(getPermutations('12XX'))

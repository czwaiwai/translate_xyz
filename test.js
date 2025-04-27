import {range, chunk, padStart, groupBy, sumBy } from 'lodash-es'

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



function getPermutations(string) {
  if (string.length === 1) {
    return [string];
  }

  let permutations = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
    let remainingPermutations = getPermutations(remainingString);

    for (let j = 0; j < remainingPermutations.length; j++) {
      permutations.push(char + remainingPermutations[j]);
    }
  }

  return permutations;
}

console.log(getPermutations('12'))

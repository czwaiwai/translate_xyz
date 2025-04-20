import {range, chunk} from 'lodash-es'

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
const units = ['仟','佰','拾','个']
export function getZhUnit(chars = '口X口X') {
  return chars.split('').reduce((before, char, index) => {
    if(char === '口') {
      before.push(units[index])
    }
    return before
  }, [])
}
console.log(getZhUnit())

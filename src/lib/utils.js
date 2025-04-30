import { emnum } from "./api"
import { range, padStart, groupBy, sumBy,  reduce, flatMap, map, difference, repeat, uniq } from 'lodash-es'
const units = ['仟','佰','拾','个']
const unitsEn = ['q', 'b', 's', 'g']
export function getZhUnit(chars = '口XX口') {
  return chars.split('').reduce((before, char, index) => {
    if (char === '口') {
      before.push({
        label: units[index],
        value: unitsEn[index]
      })
    }
    return before
  }, [])
}
export function getTwoLabel(type = '3') {
  let item = emnum.twoCate.find(item => item.value === type)
  if(!item) return ''
  return item.label
}

export function getTypeObj(name = 'twoCate') {
  return emnum[name].reduce((before, item) => {
    before[item.value] = item.label
    return before
  }, {})
}
// 用于得到数字和XX的组合，适用于两位数
export function getTwoLabelNum(nums, type = '3') {
  if(typeof nums !== 'string') new Error('getTwoLabelNum 入参nums必须为字符串！')
  if(nums.length > 3) new Error(`nums is ${nums}, 太长了无法转换！`)
  let strArr = nums.split('')
  return getTypeObj()[type].replace('口', strArr[0]).replace('口', strArr[1])
}
export function getLabelNum(nums, type = '') {
  if(typeof nums !== 'string') new Error('getTwoLabelNum 入参nums必须为字符串！')
  let strArr = nums.split('')
  if (getTypeObj()[type]) { // two匹配
    return getTypeObj()[type].replace('口', strArr[0]).replace('口', strArr[1])
  }
  if(getTypeObj('threeCate')[type]) {
    return getTypeObj()[type].replace('口', strArr[0]).replace('口', strArr[1]).replace('口', strArr[2])
  }
}
// export function getThree

const twoNameObj = {
  single: ['1','3', '5', '7', '9'],
  double: ['0','2', '4', '6', '8'],
  big: ['5','6','7','8','9'],
  small: ['0','1','2','3','4','5']
}
// 将英文字转换对应的数组
export function twoName2Arr(name) {
  if(name.length === 1) { // 可能是数字
    return [name]
  }
  return twoNameObj[name]
}

// 所有的选择转换成num数组
export function twoPosi2Nums(arr1, arr2) {
  // 获取arr1中所有的数组并去重复
  let newArr1 =  Array.from(new Set(arr1.reduce((before, item) => [...before, ...twoName2Arr(item)], [])))
  let newArr2 =  Array.from(new Set(arr2.reduce((before, item) => [...before, ...twoName2Arr(item)], [])))
  return newArr1.reduce((before, item1) => {
    before = [...before, ...newArr2.map(item2 => {
      return item1 + '' + item2
    })]
    return before
  }, [])
}
// 包含的通用数组处理，对0-99个数一一处理
function numContainFn(num, cb) {
  num = parseInt(num)
  let nums = []
  for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if(cb(i, j, num)) {
        nums.push((i*10) + j)
      }
    }
  }
  return nums.map(num => padStart(num,2,'0'))
}
export function twoContain2Nums(arr) {
  // 构建数字转数组
  const containObj = {
    single: (num) => numContainFn(num, (i,j) => ((i+j)%10)%2 === 1),
    double: (num) => numContainFn(num, (i,j) => ((i+j)%10)%2 === 0),
    num: (num) => numContainFn(num, (i,j, n) => (i+j)%10 === n)
  }
  // 得到所有可能行的数字
  let newNums = arr.reduce((before, num) => {
    return [...before,...(/\d+/.test(num) ? containObj.num(num): containObj[num]())]
  }, [])
  // 对数字进行去重复,并补零
  newNums = Array.from(new Set(newNums)).map(num => padStart(num,2,'0'))
  return newNums
}
const packageType = {
  0: 'four',
  1: 'three',
  2: 'two'
}
// 根据输入的num的到所下载的定包
export function queryPackageByNum(num) {
  let numStr = num.toString()
  if (numStr.length !==4 ) return new Error('输入数字长度不正确')
  if (!/^[\d|X]{4}$/.test(numStr)) return new Error('不是有效的输入')
  let len = numStr.replace(/\d+/g, '').length
  if (queryTypeByNum(num)) {
    return packageType[len] || ''
  }
  return ''
}

export function cover2Object(arr) {
  return arr.reduce((before,item) => {
    before[item.label] = item.value
    return before
  }, {})
}
let twoCateObj = cover2Object(emnum.twoCate)
let threeCateObj = cover2Object(emnum.threeCate)
// 根据num的到用户操作的类型
export function queryTypeByNum(num) {
  let numStr = num.toString()
  if (numStr.length !==4 ) return new Error('输入数字长度不正确')
  if (!/^[\d|X]{4}$/.test(numStr)) return new Error('不是有效的输入')
  let inputType = numStr.replace(/\d/g, '口')
  if(/^\d{4}$/.test(numStr)) return '11'
  return twoCateObj[inputType] || threeCateObj[inputType] || ''
}
// 合并用户提交的所有数据
export function mergeBets(arr1, arr2) {
  const arr = [...arr1, ...arr2]
  const group = groupBy(arr, 'betNo')
  return Object.keys(group).map(key => {
    console.log(group, 'group--', key)
    return {
      betNo: key,
      num:group[key][0].num,
      gameType: group[key][0].gameType,
      value: sumBy(group[key], (n) => +n.value) + '',
    }
  })
}
// 生成一个字符串的所有组合
export function  getPermutations(string) {
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
// 去掉号码中的X的到纯粹的数字
export function delX(str) {
  return str.replace(/X/g, '')
}
// 转换成下单的数组
export function coverToBets(formObj) {
  if(formObj.transform) {
    return Array.from(new Set(getPermutations(formObj.num))).map(betNo => {
      return {betNo:betNo, num: delX(formObj.num), gameType: queryTypeByNum(betNo), value: formObj.money}
    })
  }
  return [{betNo:formObj.num, num: delX(formObj.num), gameType: queryTypeByNum(formObj.num), value: formObj.money}]
}

function cartesianProduct(arrays) {
  return reduce(arrays, (result, currentArray) => {
      return flatMap(result, (previousValue) => {
          return map(currentArray, (currentValue) => {
              return previousValue.concat(currentValue);
          });
      });
  }, [[]]);
}
// 获取2，3 ,4 字符串间产生的所有组合
export function getCombinations(...strings) {
  const charArrays = strings.map(str => str.split(''));
  const product = cartesianProduct(charArrays);
  return product.map(combination => combination.join(''));
}


// 获取0-9中未传入的数字
export function nextNum(str) {
  if(!str) return ''
  return difference(range(10).map(n => n+''), str.split('')).join('')
}

// 入参为 千 ，百 ，十， 个，必须为四个数，没有值可以为空
export function generateAllCombinations(...args)  {
  if (args.length !==4) return new Error('入参必须为4位')
  const digitArrays = args.map(nums => (nums ? nums.split('') : ['X']))
  return digitArrays.reduce((acc, currentDigits) => {
      if (acc.length === 0) {
          return currentDigits.map(digit => `${digit}`);
      }
      return acc.flatMap(prevCombination => currentDigits.map(digit => `${prevCombination}${digit}`));
  }, []);
};
// 入参为2位3位4位

export function generateAllTransform(...args) {
  if (args.length < 2) return new Error('入参需要大于1')
  if (args.length > 4) return new Error('入参需要小于等于4')
  // const digitArrays = args.map(nums => (nums ? nums: 'X'))
  return uniq(getCombinations(...args).map(num => getPermutations(num + repeat('X', 4 - num.length))).flatMap(nums => nums))
}

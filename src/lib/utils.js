import { emnum } from './api'
import {
  range,
  padStart,
  groupBy,
  sumBy,
  reduce,
  flatMap,
  map,
  difference,
  repeat,
  uniq,
  flow,
  add,
  toNumber,
} from 'lodash-es'
const units = ['仟', '佰', '拾', '个']
const unitsEn = ['q', 'b', 's', 'g']
export function getZhUnit(chars = '口XX口') {
  return chars.split('').reduce((before, char, index) => {
    if (char === '口') {
      before.push({
        label: units[index],
        value: unitsEn[index],
      })
    }
    return before
  }, [])
}
export function getTwoLabel(type = '3') {
  let item = emnum.twoCate.find((item) => item.value === type)
  if (!item) return ''
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
  if (typeof nums !== 'string') new Error('getTwoLabelNum 入参nums必须为字符串！')
  if (nums.length > 3) new Error(`nums is ${nums}, 太长了无法转换！`)
  let strArr = nums.split('')
  return getTypeObj()[type].replace('口', strArr[0]).replace('口', strArr[1])
}
export function getLabelNum(nums, type = '') {
  if (typeof nums !== 'string') new Error('getTwoLabelNum 入参nums必须为字符串！')
  let strArr = nums.split('')
  if (getTypeObj()[type]) {
    // two匹配
    return getTypeObj()[type].replace('口', strArr[0]).replace('口', strArr[1])
  }
  if (getTypeObj('threeCate')[type]) {
    return getTypeObj()
      [type].replace('口', strArr[0])
      .replace('口', strArr[1])
      .replace('口', strArr[2])
  }
}
// export function getThree

const twoNameObj = {
  single: ['1', '3', '5', '7', '9'],
  double: ['0', '2', '4', '6', '8'],
  big: ['5', '6', '7', '8', '9'],
  small: ['0', '1', '2', '3', '4', '5'],
}
// 将英文字转换对应的数组
export function twoName2Arr(name) {
  if (name.length === 1) {
    // 可能是数字
    return [name]
  }
  return twoNameObj[name]
}

// 所有的选择转换成num数组
export function twoPosi2Nums(arr1, arr2) {
  // 获取arr1中所有的数组并去重复
  let newArr1 = Array.from(
    new Set(arr1.reduce((before, item) => [...before, ...twoName2Arr(item)], [])),
  )
  let newArr2 = Array.from(
    new Set(arr2.reduce((before, item) => [...before, ...twoName2Arr(item)], [])),
  )
  return newArr1.reduce((before, item1) => {
    before = [
      ...before,
      ...newArr2.map((item2) => {
        return item1 + '' + item2
      }),
    ]
    return before
  }, [])
}
// 包含的通用数组处理，对0-99个数一一处理
function numContainFn(num, cb) {
  num = parseInt(num)
  let nums = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (cb(i, j, num)) {
        nums.push(i * 10 + j)
      }
    }
  }
  return nums.map((num) => padStart(num, 2, '0'))
}
export function twoContain2Nums(arr) {
  // 构建数字转数组
  const containObj = {
    single: (num) => numContainFn(num, (i, j) => ((i + j) % 10) % 2 === 1),
    double: (num) => numContainFn(num, (i, j) => ((i + j) % 10) % 2 === 0),
    num: (num) => numContainFn(num, (i, j, n) => (i + j) % 10 === n),
  }
  // 得到所有可能行的数字
  let newNums = arr.reduce((before, num) => {
    return [...before, ...(/\d+/.test(num) ? containObj.num(num) : containObj[num]())]
  }, [])
  // 对数字进行去重复,并补零
  newNums = Array.from(new Set(newNums)).map((num) => padStart(num, 2, '0'))
  return newNums
}
const packageType = {
  0: 'four',
  1: 'three',
  2: 'two',
}
// 根据输入的num的到所下载的定包
export function queryPackageByNum(num) {
  let numStr = num.toString()
  if (numStr.length !== 4) return new Error('输入数字长度不正确')
  if (!/^[\d|X]{4}$/.test(numStr)) return new Error('不是有效的输入')
  let len = numStr.replace(/\d+/g, '').length
  if (queryTypeByNum(num)) {
    return packageType[len] || ''
  }
  return ''
}

export function cover2Object(arr) {
  return arr.reduce((before, item) => {
    before[item.label] = item.value
    return before
  }, {})
}
let twoCateObj = cover2Object(emnum.twoCate)
let threeCateObj = cover2Object(emnum.threeCate)
// 根据num的到用户操作的类型
export function queryTypeByNum(num) {
  let numStr = num.toString()
  if (numStr.length !== 4) return new Error('输入数字长度不正确')
  if (!/^[\d|X]{4}$/.test(numStr)) return new Error('不是有效的输入')
  let inputType = numStr.replace(/\d/g, '口')
  if (/^\d{4}$/.test(numStr)) return '11'
  return twoCateObj[inputType] || threeCateObj[inputType] || ''
}
// 合并用户提交的所有数据
export function mergeBets(arr1, arr2) {
  const arr = [...arr1, ...arr2]
  const group = groupBy(arr, 'betNo')
  return Object.keys(group).map((key) => {
    console.log(group, 'group--', key)
    return {
      betNo: key,
      num: group[key][0].num,
      gameType: group[key][0].gameType,
      value: sumBy(group[key], (n) => +n.value) + '',
    }
  })
}

// 替换所有template中的口为数字
export function replaceChars(str, template) {
  let index = 0
  return template.replace(/口/g, () => (index < str.length ? str[index++] : '口'))
}

// 生成一个字符串的所有组合
export function getAllPermutations(str) {
  if (str.length !== 4) {
    throw new Error('Input string must be exactly 4 characters long')
  }

  const chars = str.split('')

  // 使用 reduce 生成所有可能的排列组合
  const permutations = reduce(
    chars,
    (result, char) => {
      if (result.length === 0) return [[char]]

      // 使用 flatMap 在每个现有排列的每个可能位置插入新字符
      return flatMap(result, (perm) => {
        const spots = Array(perm.length + 1).fill(null)
        return spots.map((_, i) => [...perm.slice(0, i), char, ...perm.slice(i)])
      })
    },
    [],
  )

  // 转换结果数组并去重
  return Array.from(new Set(permutations.map((arr) => arr.join(''))))
}
// 生成一个字符串所有二字组合
export function strTwoComb(str) {
  const result = []
  const chars = str.split('') // 将字符串拆分为字符数组
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      if (i !== j) {
        // 确保两个字符不相同
        result.push(chars[i] + chars[j])
      }
    }
  }
  return result
}
// 生成一个字符串所有三字组合
export function strThreeComb(str) {
  const result = []
  const digits = str.split('') // 将字符串拆分为字符数组
  // 使用三重循环生成所有可能的三位数组合
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        // 确保三个数字不相同
        if (i !== j && i !== k && j !== k) {
          const combination = digits[i] + digits[j] + digits[k]
          result.push(combination)
        }
      }
    }
  }
  return result
}

export function getAllCombinations(str, combinationLength) {
  const result = []
  const chars = str.split('') // 将字符串拆分为字符数组

  // 递归函数，用于生成组合
  function generateCombinations(currentCombination, startIndex) {
    if (currentCombination.length === combinationLength) {
      result.push(currentCombination.join(''))
      return
    }

    for (let i = 0; i < chars.length; i++) {
      if (currentCombination.indexOf(chars[i]) === -1) {
        // 确保字符不重复
        currentCombination.push(chars[i])
        generateCombinations(currentCombination, i + 1)
        currentCombination.pop() // 回溯，移除最后一个字符
      }
    }
  }

  generateCombinations([], 0)
  return result
}
// 去掉号码中的X的到纯粹的数字
export function delX(str) {
  return str.replace(/X/g, '')
}
// 转换成下单的数组
export function coverToBets(formObj) {
  if (formObj.transform) {
    return getAllPermutations(formObj.num).map((betNo) => {
      return {
        betNo: betNo,
        num: delX(formObj.num),
        gameType: queryTypeByNum(betNo),
        value: formObj.money,
      }
    })
  }
  return [
    {
      betNo: formObj.num,
      num: delX(formObj.num),
      gameType: queryTypeByNum(formObj.num),
      value: formObj.money,
    },
  ]
}

function cartesianProduct(arrays) {
  return reduce(
    arrays,
    (result, currentArray) => {
      return flatMap(result, (previousValue) => {
        return map(currentArray, (currentValue) => {
          return previousValue.concat(currentValue)
        })
      })
    },
    [[]],
  )
}
// 获取2，3 ,4 字符串间产生的所有组合
export function getCombinations(...strings) {
  const charArrays = strings.map((str) => str.split(''))
  const product = cartesianProduct(charArrays)
  return product.map((combination) => combination.join(''))
}

// 获取0-9中未传入的数字
export function nextNum(str) {
  if (!str) return ''
  return difference(
    range(10).map((n) => n + ''),
    str.split(''),
  ).join('')
}

// 入参为 千 ，百 ，十， 个，必须为四个数，没有值可以为空
export function generateAllCombinations(...args) {
  if (args.length !== 4) return new Error('入参必须为4位')
  const digitArrays = args.map((nums) => (nums ? nums.split('') : ['X']))
  return digitArrays.reduce((acc, currentDigits) => {
    if (acc.length === 0) {
      return currentDigits.map((digit) => `${digit}`)
    }
    return acc.flatMap((prevCombination) =>
      currentDigits.map((digit) => `${prevCombination}${digit}`),
    )
  }, [])
}
// 入参为2位3位4位

export function generateAllTransform(...args) {
  if (args.length < 2) return new Error('入参需要大于1')
  if (args.length > 4) return new Error('入参需要小于等于4')
  // const digitArrays = args.map(nums => (nums ? nums: 'X'))
  return uniq(
    getCombinations(...args)
      .map((num) => getPermutations(num + repeat('X', 4 - num.length)))
      .flatMap((nums) => nums),
  )
}
// 函数组合 传入多个处理函数，上一个函数的处理结果是下一个函数的入参
// export function compose(...funcs) {
//   return flow(funcs)
// }
export function compose(middlewares) {
  return function (context) {
    function dispatch(i) {
      if (i === middlewares.length) return context
      const middleware = middlewares[i]
      // eslint-disable-next-line no-useless-catch
      try {
        return middleware(context, function next() {
          return dispatch(i + 1)
        })
      } catch (err) {
        throw err
      }
    }
    return dispatch(0)
  }
}

// 如果数字为空这返回全部
export function emptyNums(val) {
  if (!val) return '0123456789'
  return val.toString()
}
// 数字拆分返回数字
export function splitNum(numstr) {
  if (numstr.includes('X')) {
    numstr = numstr.replace(/X/g, '')
  }
  return numstr.split('').map(toNumber)
}
// 一个数字拆分后相加
export function strAdd(numstr) {
  return add(...splitNum(numstr))
}

// 对数的处理
// 默认能输入的对数有 05｜16｜27｜38｜49
// const logariNums = ['05','16','27','38','49']
const logariArr = [
  ['0', '5'],
  ['1', '6'],
  ['2', '7'],
  ['3', '8'],
  ['4', '9'],
]
export function logarithm(arr, input1, input2, input3) {
  // 没有输入则找到所有对数
  if (!input1 && !input2 && !input3) {
    return arr.filter((item) =>
      logariArr.some(([num1, num2]) => item.includes(num1) && item.includes(num2)),
    )
  } else {
    // 有输入按输入的来
    let tmpArr = []
    if (input1) {
      tmpArr.push(splitNum(input1))
    }
    if (input2) {
      tmpArr.push(splitNum(input2))
    }
    if (input3) {
      tmpArr.push(splitNum(input3))
    }
    return arr.filter((item) =>
      tmpArr.some(([num1, num2]) => item.includes(num1 + '') && item.includes(num2 + '')),
    )
  }
}

// 验证对数值是否有效
const logariNums = ['05', '50', '16', '61', '27', '72', '38', '83', '49', '94']
export function validLogar(input) {
  return !input || logariNums.includes(input)
}

// 得到字符串中字母为T的索引
export function getIndexs(str) {
  return str
    .split('')
    .map((item, index) => (item === 'T' ? index : -1))
    .filter((item) => item !== -1)
}

// 数组中指定位置取单
export function filterOdd(arr, indexs) {
  return arr.filter((item) =>
    item.split('').reduce((before, sub, index) => {
      if (indexs.includes(index)) {
        if (sub === 'X') return false
        return sub % 2 === 1 && before
      }
      return before
    }, true),
  )
}
// 数组中指定位置取双
export function filterEven(arr, indexs) {
  return arr.filter((item) =>
    item.split('').reduce((before, sub, index) => {
      if (indexs.includes(index)) {
        if (sub === 'X') return false
        return sub % 2 === 0 && before
      }
      return before
    }, true),
  )
}
// 数组中指定位置取大
export function filterBig(arr, indexs) {
  return arr.filter((item) =>
    item.split('').reduce((before, sub, index) => {
      if (indexs.includes(index)) {
        if (sub === 'X') return false
        return +sub >= 5 && before
      }
      return before
    }, true),
  )
}
// 数组中指定位置取小
export function filterSmall(arr, indexs) {
  return arr.filter((item) =>
    item.split('').reduce((before, sub, index) => {
      if (indexs.includes(index)) {
        if (sub === 'X') return false
        return +sub < 5 && before
      }
      return before
    }, true),
  )
}

export function isMobile() {
  return window.isMobile
  // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

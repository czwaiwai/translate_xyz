import { emnum } from "./api"
import { range, padStart } from 'lodash-es'
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

export function getTwoTypeObj() {
  return emnum.twoCate.reduce((before, item) => {
    before[item.value] = item.label
    return before
  }, {})
}
export function getTwoLabelNum(nums, type = '3') {
  if(typeof nums !== 'string') new Error('getTwoLabelNum 入参nums必须为字符串！')
  if(nums.length > 3) new Error(`nums is ${nums}, 太长了无法转换！`)
  let strArr = nums.split('')
  return getTwoTypeObj()[type].replace('口', strArr[0]).replace('口', strArr[1])
}

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

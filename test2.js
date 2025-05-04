import {difference, add, partial, flow, toNumber } from 'lodash-es'
const num1 = '1234'
const num2 =  '234'
//二字现 取
// 如果数字为空这返回全部
const getEmptyNums = (val) => {
  if(!val) return '0123456789'
  return val
}
const quFn = (input1, input2) => {
  let num1Arr = getEmptyNums(input1).split('')
  let num2Arr = getEmptyNums(input2).split('')
  let arr = []
  for(let i = 0; i < num1Arr.length; i++) {
    for(let j = 0; j < num2Arr.length; j++) {
      if(num1Arr[i] < num2Arr[j]) {
        arr.push(num1Arr[i] + '' + num2Arr[j])
      } else {
        arr.push(num2Arr[j]+ '' + num1Arr[i])
      }
    }
  }
  return Array.from(new Set(arr))
}
//二字现 除
const chuFn = (input1, input2) => {
  return difference(quFn(), quFn(input1, input2))
}

//二字现  不定位合分
const strAdd = (numstr) => {
  let nums = add(...(numstr.split('').map(num => parseInt(num))))
  return nums
}
const hefenFn = (arr, input) => {
  return arr.filter(item => input.includes((strAdd(item) % 10).toString()))
}
console.log(quFn())
console.log(chuFn())
console.log(quFn(num1,num2))
console.log(chuFn(num1,num2))
console.log('不定位合分----------')
console.log(hefenFn(quFn(num1,num2), '78'))
console.log('不定位合分flow---------')
const hefenNextFn = flow([quFn, partial(hefenFn,partial.placeholder,'78')])
console.log(hefenNextFn(num1,num2))

// 二字现 双重
// 取
const doubleQuFn = (arr) => {
  return arr.filter(num => {
    let tmp = num.split('')
    return tmp.reduce((before,item) => (before && item === tmp[0]), true)
  })
}
const doubleQuFlow = flow(hefenNextFn, doubleQuFn)
console.log('双重-取')
console.log(doubleQuFlow(num1,num2))
// 除
const doubleChuFn = (arr => {
  return difference(arr, doubleQuFn(arr))
})
const doubleChuFlow = flow(hefenNextFn, doubleChuFn)
console.log('双重-除')
console.log(doubleChuFlow(num1,num2))

// 二兄弟
const splitNum = num => {
  return num.split('').map(toNumber)
}
const brotherQuFn = (arr) => {
  return arr.filter(num => {
    let [tmp1,tmp2] = splitNum(num)
    return tmp2 - tmp1 === 1
  })
}
const brotherChuFn = (arr) => {
  return difference(arr, brotherQuFn(arr))
}
const brotherQuFlow = flow(quFn, brotherQuFn)
const brotherChuFlow = flow(quFn, brotherChuFn)
console.log('二兄弟-取')
console.log(brotherQuFlow(num1, num2))
console.log('二兄弟-除')
console.log(brotherChuFlow(num1, num2))

console.log('对数-取')
const logarithmQuFn = (arr, input) => {
  let numArr = splitNum(input)
  return arr.filter(num => numArr.reduce((before,item) => before && num.includes(item), true))
}
// const logarithmQuFlow1 = flow(quFn,partial(logarithmQuFn, partial.placeholder, '05'))
// const logarithmQuFlow2 = flow(quFn, partial(logarithmQuFn, partial.placeholder, '16'))
// const logarithmQuFlow3 = flow(quFn, partial(logarithmQuFn, partial.placeholder, '27'))
const logarithmQuAllFn = (arr, input1, input2, input3) => {
  return [
    ...logarithmQuFn(arr,input1),
    ...logarithmQuFn(arr,input2),
    ...logarithmQuFn(arr,input3),
  ]
}
const logarithmQuAllFlow = flow(quFn,partial(logarithmQuAllFn, partial.placeholder, '05', '16', '27'))
console.log(logarithmQuAllFlow('012','567'))
console.log('对数-除')
const logarithmChuAll = (arr, input1, input2, input3) => {
  return difference(arr, logarithmQuAllFn(arr, input1, input2, input3))
}
const logarithmChuAllFlow = flow(quFn,partial(logarithmChuAll, partial.placeholder, '05', '16', '27'))
console.log(logarithmChuAllFlow('012','567'))

console.log('单单-取')




console.log('双双-取')

import { difference } from 'lodash-es';
import {compose, emptyNums, splitNum, getIndexs, logarithm, filterOdd, filterEven, filterBig, filterSmall} from '@/lib/utils.js'


// 三字现取逻辑
const quFn = (input1, input2, input3) => {
  let num1Arr = emptyNums(input1).split('')
  let num2Arr = emptyNums(input2).split('')
  let num3Arr = emptyNums(input3).split('')
  let arr = []
  for(let i = 0; i < num1Arr.length; i++) {
    for(let j = 0; j < num2Arr.length; j++) {
      for(let n = 0; n < num3Arr.length; n++) {
        arr.push([num1Arr[i],num2Arr[j],num3Arr[n]].sort((a,b) => a-b).join(''))
      }
    }
  }
  return Array.from(new Set(arr))
}
// 配数的处理逻辑
function midPeishu(ctx, next) {
  let {peishu, pei1, pei2, pei3} = ctx.formObj
  if (pei1 || pei2 || pei3) {
    ctx.process++
    if (peishu === '1') { // 取数处理
      ctx.res = quFn(pei1, pei2, pei3)
    } else {
      ctx.res = difference(quFn(), quFn(pei1, pei2, pei3))
    }
  } else {
    ctx.res = quFn()
  }
  return next();
}

// 不定位合分 三字现使用 三字现两数合，不分顺序只有3个组合，简化逻辑直接列出
function midBudinghe(ctx, next) {
  let {budingheCheck, budinghe} = ctx.formObj
  if (budingheCheck && budinghe) {
    ctx.process ++
    ctx.res = ctx.res.filter(item => {
      let [num1,num2,num3] = splitNum(item)
      let arr = splitNum(budinghe)
      return [num1 + num2, num1 + num3, num2 + num3].some(num => arr.includes(num % 10))
    })
  }
  return next()
}
// 三字现 三数合 三个数相加
function midBudingheThree(ctx, next) {
  let {budingheCheckThree, budingheThree } = ctx.formObj
  if (budingheCheckThree && budingheThree) {
    ctx.process ++
    ctx.res = ctx.res.filter(item => {
      let [num1,num2,num3] = splitNum(item)
      let arr = splitNum(budingheThree)
      return [num1 + num2 + num3].some(num => arr.includes(num % 10))
    })
  }
  return next()
}


// 二字现  含｜复式
function midContain(ctx, next) {
  let {containVal, containGroup} = ctx.formObj
  if (containVal) {
    ctx.process ++
    if (containGroup === '1') {
      ctx.res = ctx.res.filter(item => splitNum(containVal).some(sub => item.includes(sub)))
    } else {
      ctx.res = difference(ctx.res, ctx.res.filter(item => splitNum(containVal).some(sub => item.includes(sub))))
    }
  }
  return next()
}
// 复式
function midMulti(ctx, next) {
  let { multiVal, containGroup } = ctx.formObj
  if (multiVal) {
    ctx.process ++
    if (containGroup === '1') { //  取
      // 组成的数字的每个数都要在multival中存在
      ctx.res = ctx.res.filter(item => splitNum(item).every(sub => multiVal.includes(sub +'')))
    } else { // 除
      ctx.res = difference(ctx.res, ctx.res.filter(item => splitNum(item).every(sub => multiVal.includes(sub +''))))
    }
  }
  return next()
}
// 取
// 双重处理
const doubleTwoFn = (arr) => {
  return arr.filter(num => {
    let [num1,num2,num3] = num.split('')
    return num1 === num2 || num2 === num3
  })
}
// 这个应该用于多重，数字为3字现，则为3重，数字为2字现则两重，数字为4字现则4重
const doubleQuFn = (arr) => {
  return arr.filter(num => {
    let tmp = num.split('')
    return tmp.reduce((before,item) => (before && item === tmp[0]), true)
  })
}
// 双重
function midDouble(ctx, next) {
  let {doubleGroup} = ctx.formObj
  if(doubleGroup && doubleGroup !== '0') {
    ctx.process ++
    if (doubleGroup === '1') {
      ctx.res = doubleTwoFn(ctx.res)
    } else {
      ctx.res = difference(ctx.res, doubleTwoFn(ctx.res))
    }
  }
  return next()
}
// 三重
function midDoubleThree(ctx, next) {
  let {doubleThreeGroup} = ctx.formObj
  if(doubleThreeGroup && doubleThreeGroup !== '0') {
    ctx.process ++
    if (doubleThreeGroup === '1') {
      ctx.res = doubleQuFn(ctx.res)
    } else {
      ctx.res = difference(ctx.res, doubleQuFn(ctx.res))
    }
  }
  return next()
}

// 二兄弟
// 两兄弟 两个数相减 有一个为1即匹配
const brotherQuFn = (arr) => {
  return arr.filter(num => {
    let [tmp1,tmp2,tmp3] = splitNum(num)
    const diff1 = Math.abs(tmp1 - tmp2) === 1 || Math.abs(tmp1 - tmp2) === 9
    const diff2 = Math.abs(tmp2 - tmp3) === 1 || Math.abs(tmp2 - tmp3) === 9
    const diff3 = Math.abs(tmp3 - tmp1) === 1 || Math.abs(tmp3 - tmp1) === 9
    return diff1 || diff2 || diff3
  })
}
// 三兄弟 两数相减 都为1才匹配
const brotherQuThreeFn =  (arr) => {
  return arr.filter(num => {
    let [tmp1,tmp2,tmp3] = splitNum(num)
    return (((tmp3 - tmp2) ===1)  && ((tmp2 - tmp1) === 1)) || (tmp1 + '' + tmp3 === '09' && (tmp2-tmp1 ===1 || tmp3 - tmp2 ===1))
  })
}
function midBrother(ctx, next) {
  let {brotherGroup} = ctx.formObj
  if(brotherGroup && brotherGroup !== '0') {
    ctx.process ++
    if (brotherGroup === '1') {
      ctx.res = brotherQuFn(ctx.res)
    } else {
      ctx.res = difference(ctx.res, brotherQuFn(ctx.res))
    }
  }
  return next()
}
function midBrotherThree(ctx, next) {
  let {brotherThreeGroup} = ctx.formObj
  if(brotherThreeGroup && brotherThreeGroup !== '0') {
    ctx.process ++
    if (brotherThreeGroup === '1') {
      ctx.res = brotherQuThreeFn(ctx.res)
    } else {
      ctx.res = difference(ctx.res, brotherQuThreeFn(ctx.res))
    }
  }
  return next()
}
// 对数
function midDuishu(ctx, next) {
  let {duishuGroup, duishu1, duishu2, duishu3} = ctx.formObj
  if(duishuGroup && duishuGroup !== '0') {
    ctx.process ++
    if(duishuGroup === '1') {
      ctx.res = logarithm(ctx.res, duishu1, duishu2, duishu3)
    } else {
      ctx.res = difference(ctx.res, logarithm(ctx.res, duishu1, duishu2, duishu3))
    }
  }
  return next()
}
// 单
function midOdd(ctx, next) {
  let {oddGroup, oddCheckStr} = ctx.formObj
  if(oddGroup && oddGroup !== '0' && oddCheckStr.includes('T')) {
    ctx.process ++
    // 得到索引
    let indexs = getIndexs(oddCheckStr)
    if (oddGroup === '1') { // 取
      ctx.res = filterOdd(ctx.res, indexs)
    } else { // 除
      ctx.res = difference(ctx.res, filterOdd(ctx.res, indexs))
    }
  }
  return next()
}
// 双
function midEven(ctx, next) {
  let { evenGroup, evenCheckStr} = ctx.formObj
  // 存在T才处理
  if(evenGroup && evenGroup !== '0' && evenCheckStr.includes('T')) {
    ctx.process ++
    // 得到索引
    let indexs = getIndexs(evenCheckStr)
    if (evenGroup === '1') { // 取
      ctx.res = filterEven(ctx.res, indexs)
    } else { // 除
      ctx.res = difference(ctx.res, filterEven(ctx.res, indexs))
    }
  }
  return next()
}
// 大
function midBig(ctx, next) {
  let { bigGroup, bigCheckStr } = ctx.formObj
  // 存在T才处理
  if (bigGroup && bigGroup !== '0' && bigCheckStr.includes('T')) {
    console.log(bigGroup)
    ctx.process ++
    let indexs = getIndexs(bigCheckStr)
    if(bigGroup === '1') { // 取
      ctx.res = filterBig(ctx.res, indexs)
    } else { // 除
      ctx.res = difference(ctx.res, filterBig(ctx.res, indexs))
    }
  }
  return next()
}
// 小
function midSmall(ctx, next) {
  let {smallGroup, smallCheckStr} = ctx.formObj
  // 存在T才处理
  if (smallGroup && smallGroup !== '0' && smallCheckStr.includes('T')) {
    let indexs = getIndexs(smallCheckStr)
    ctx.process ++
    if(smallGroup === '1') { // 取
      ctx.res = filterSmall(ctx.res, indexs)
    } else { // 除
      ctx.res = difference(ctx.res, filterSmall(ctx.res, indexs))
    }
  }
  return next()
}
// 最后排序
function midSort(ctx, next) {
  ctx.res.sort((a,b) => a-b)
  return next()
}
// 表单初始对象
export const formX = {
    peishu: '1', // 配数
    pei1: '', // 配数1
    pei2: '', // 配数2
    pei3: '',
    budingheCheck: false, // 不定位合分
    budinghe: '', // 不定位合分值
    budingheCheckThree: false, // 三合数
    budingheThree: '', // 三合数值
    containGroup: '1',  // 二字定 含｜复式
    containVal: '', // 含
    multiVal: '', // 复式
    doubleGroup: '', // 双重
    doubleThreeGroup: '', // 三重
    brotherGroup: '', // 二兄弟
    brotherThreeGroup: '', // 三兄弟
    duishuGroup: '', // 对数
    duishu1: '',
    duishu2: '',
    duishu3: '',
    oddGroup: '', // 单
    oddCheckStr: '',
    evenGroup: '', // 双
    evenCheckStr: '',
    bigGroup: '', // 大
    bigCheckStr: '',
    smallGroup: '', // 小
    smallCheckStr: ''
}
// 导出处理流程 二字现的处理流程
export function toComposed(context) {
  const middlewares = [
    midPeishu,
    midBudinghe,
    midBudingheThree,
    midContain,
    midMulti,
    midDouble,
    midDoubleThree,
    midBrother,
    midBrotherThree,
    midDuishu,
    midOdd,
    midEven,
    midBig,
    midSmall,
    midSort
  ]
  return compose(middlewares)(context)
}

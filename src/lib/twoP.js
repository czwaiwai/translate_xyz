
import {invert, difference} from 'lodash-es'
import {compose, getTypeObj, emptyNums, strTwoComb, splitNum, getIndexs, logarithm, filterOdd, filterEven, filterBig, filterSmall} from '@/lib/utils.js'
import NodeNum from './nodeNum.js'
// 转为nodeNum对象
function midCreateNode(ctx, next) {
  let { nums, template } = ctx
  // 生成所有数
  ctx.nodes = nums.map(num => new NodeNum(num, template))
  ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getNums()] ,[])
  return next()
}

// function midCreateNode(ctx, next) {
//   let {nums, template } = ctx
//   replaceChars('12', 'XX口口')
//   ctx.nodes = nums.map(item => )
// }
function onlyNum(num) {
  return num.replace(/X/g, '')
}
function onlyNumArr(num) {
  return onlyNum(num).split('')
}
// 定位置
function midPosition(ctx, next) {
  let { position, ge, shi, bai, qian } = ctx.formObj
  if (position && position !== '0') {
    ctx.process ++
    if(position === '1') {
      ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getPosiNums(qian, bai, shi, ge)],[])
    } else {
      ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getChuPosiNums(qian, bai, shi, ge)],[])
    }
  }
  return next()
}
// 配数获取所有组合
function peiFn(pei1, pe12) {
  let str1 = emptyNums(pei1)
  let str2 = emptyNums(pe12)
  const combinations = [];
  for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
          combinations.push(str1[i] + str2[j]);
      }
  }
  for (let i = 0; i < str2.length; i++) {
      for (let j = 0; j < str1.length; j++) {
          combinations.push(str2[i] + str1[j]);
      }
  }
  return combinations;
}
// 配数全转
function midTransForm(ctx, next) {
  let {transform, pei1, pei2} = ctx.formObj
  if (transform && transform !== '0') {
    ctx.process ++
    let peiArr = peiFn(pei1, pei2)
    console.log('peiArr', peiArr)
    if (transform === '1') {
      ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getTransNums(peiArr)], [])
    } else {
      ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getChuTransNums(peiArr)], [])
    }
  }
  return next()
}
function computedHe(num, he, check) {
  // 得到所有勾选位置的坐标
  let posiArr = check.split('').reduce((before, item, index)=> {
    if(item === 'T') {
      before.push(index)
    }
    return before
  } , [])
  // 判断有一个不是数字就返回false
  if(posiArr.some(item => !/\d/.test(item))) return false
  // 坐标中的值相加
  let newNum =  posiArr.reduce((before, item) => before + parseInt(num[item]), 0)
  // 取个位数是否在he中
  return he.includes(newNum % 10)
}
// 合 分
function midHeFen(ctx, next) {
  let {fenhe, he1, he1check, he2, he2check, he3, he3check, he4, he4check} = ctx.formObj
  let hefenArr = [
    { value: he1, check: he1check },
    { value: he2, check: he2check },
    { value: he3, check: he3check },
    { value: he4, check: he4check },
  ]
  let quArr = hefenArr.reduce((before, item) => {
    let {value, check} = item
    if (value && /T/.test(check)) {
      ctx.process ++
      const regStr = check.replace(/T/g, '\\d').replace(/X/g, '[\\d|X]')
      const reg = new RegExp('^' + regStr + '$')
      // 得到满足规则条件的值
      before = before.filter(num => reg.test(num) && computedHe(num, value, check))
    }
    return before
  }, [...ctx.res])
  if (fenhe === '1') { // 取
    ctx.res = quArr
  } else { // 除
    ctx.res = difference(ctx.res, quArr)
  }
  return next()
}

function numTotal(num) {
  return num.replace(/X/g, '').split('').reduce((b, n) => b + +n ,0)
}
// 不定位合分 两数合  将号码中数字部分相加 取个位等于 budinghe中的值为匹配
function midBudinghe(ctx, next) {
  let {budingheCheck, budinghe} = ctx.formObj
  if (budingheCheck && budinghe) {
    ctx.process ++
    ctx.res = ctx.res.filter(item => {
      return budinghe.includes((numTotal(item) % 10).toString())
    })
  }
  return next()
}
// 全转 所有输入字符串产生的2字组合匹配
function midNumInVal(ctx, next) {
  let { allRound } = ctx.formObj
  if(allRound) {
    let arr = strTwoComb(allRound)
    if(arr.length) {
      ctx.process ++
      ctx.res = ctx.res.filter(item => arr.includes(item.replace(/X/g, '')))
    }
  }
  return next()
}
// 上奖 应该是所输出的值在号码中存在，存在一个即可
function midUpper(ctx, next) {
  let { upper } = ctx.formObj
  if(upper) {
    ctx.process ++
    ctx.res = ctx.res.filter(item => {
      let [num1, num2] = item.replace(/X/g, '').split('')
      return upper.includes(num1) || upper.includes(num2)
    })
  }
  return next()
}
// 排除 逻辑应该是所输入的值不能出现在号码中
function midExclude(ctx, next) {
  let {exclude} = ctx.formObj
  if(exclude) {
    let exArr = Array.from(new Set(exclude))
    ctx.process ++
    ctx.res = ctx.res.filter(item => !exArr.some(n => item.includes(n)))
  }
  return next()
}

// 乘号位置
function midTimesWhere(ctx, next) {
  let { timesWhere } = ctx.formObj
  if (timesWhere.includes('T')) {
    // 获取乘号位置的坐标
    let posiArr = timesWhere.split('').reduce((before, item, index) => {
      if(item === 'T') {
        before.push(index)
      }
      return before
    } , [])
    ctx.process ++
    ctx.res = ctx.res.filter(item => posiArr.every(index =>  item[index] === 'X'))
  }
  return next()
}
// 二字现  含｜复式
function midContain(ctx, next) {
  let {containVal, containGroup} = ctx.formObj
  if (containVal) {
    ctx.process ++
    let tmpArr = ctx.res.filter(item => splitNum(containVal).some(sub => item.includes(sub)))
    if (containGroup === '1') {
      ctx.res = tmpArr
    } else {
      ctx.res = difference(ctx.res, tmpArr)
    }
  }
  return next()
}
// 复式
function midMulti(ctx, next) {
  let { multiVal, containGroup } = ctx.formObj
  if (multiVal) {
    ctx.process ++
    let tmpArr = ctx.res.filter(item => onlyNumArr(item).every(sub => multiVal.includes(sub + '')))
    if (containGroup === '1') { //  取
      // 组成的数字的每个数都要在multival中存在
      ctx.res = tmpArr
    } else { // 除
      ctx.res = difference(ctx.res, tmpArr)
    }
  }
  return next()
}
// 双重
function doubleQuFn(arr) {
  return arr.filter(num => {
    let [num1, num2] = num.replace(/X/g, '').split('')
    return num1 === num2
  })
}
// 双重
function midDouble(ctx, next) {
  let {doubleGroup} = ctx.formObj
  if(doubleGroup && doubleGroup !== '0') {
    ctx.process ++
    if (doubleGroup === '1') {
      ctx.res = doubleQuFn(ctx.res)
    } else {
      ctx.res = difference(ctx.res, doubleQuFn(ctx.res))
    }
  }
  return next()
}
// 二兄弟
const brotherQuFn = (arr) => {
  return arr.filter(num => {
    let [tmp1,tmp2] = onlyNumArr(num)
    return Math.abs(tmp1 - tmp2) === 1 || Math.abs(tmp1 - tmp2) === 9
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

export const formP = {
  position: '1', // 定位置
  transform:  '0', // 配数全转
  ge: '',
  shi: '',
  bai: '',
  qian: '',
  pei1: '',
  pei2: '',
  fenhe: '1',
  he1: '',
  he1check: '',
  he2: '',
  he2check: '',
  he3: '',
  he3check: '',
  he4: '',
  he4check: '',
  allRound: '', // 全转
  upper: '', // 上奖
  exclude: '', // 排除
  timesWhere: '', // 乘号位置
  containGroup: '1', // 包含
  containVal: '', // 包含值
  multiVal:'', // 复式
  doubleGroup: '', // 双重
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

// 最后排序
function midSort(ctx, next) {
  let types = invert(getTypeObj())
  ctx.res.sort((a,b) => {
    return types[a.replace(/\d/g, '口')] - types[b.replace(/\d/g, '口')]
  })
  return next()
}
// 导出处理流程 二字定的处理流程
export function toComposed(context) {
  const middlewares = [
    midCreateNode,
    midPosition,
    midTransForm,
    midHeFen,
    midBudinghe,
    midNumInVal, // 全转
    midUpper,
    midExclude,
    midTimesWhere, // 乘号位置
    midContain,
    midMulti,
    midDouble,
    midBrother,
    midDuishu,
    midOdd,
    midEven,
    midBig,
    midSmall,
    midSort
  ]
  return compose(middlewares)(context)
}

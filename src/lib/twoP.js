
import {invert, difference} from 'lodash-es'
import {compose, getTypeObj, emptyNums, strAdd, splitNum, getIndexs, logarithm, filterOdd, filterEven, filterBig, filterSmall} from '@/lib/utils.js'
import NodeNum from './nodeNum.js'
// 转为nodeNum对象
function midCreateNode(ctx, next) {
  let { nums, template } = ctx
  // 生成所有数
  ctx.nodes = nums.map(num => new NodeNum(num, template))
  return next()
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
// 配数全转
function midTransForm(ctx, next) {
  let {transform, pei1, pei2} = ctx.formObj
  if (transform && transform !== '0') {
    ctx.process ++
    if (transform === '1') {
      ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getTransNums(pei1,pei2)], [])
    } else {
      ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getChuTransNums(pei1,pei2)], [])
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
export const formP = {
  position: '1', // 定位置
  transform:  '0', // 配数全转
  ge: '',
  shi: '',
  bai: '',
  qian: '',
  pei1: '',
  pei2: '',
  fenhe: '',
  he1: '',
  he2: '',
  he3: '',
  he4: '',
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
  console.log(types, '=====')
  ctx.res.sort((a,b) => {
    console.log(a, b)
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
    // midPeishu,
    // midBudinghe,
    // midContain,
    // midMulti,
    midDouble,
    // midBrother,
    // midDuishu,
    // midOdd,
    // midEven,
    // midBig,
    // midSmall,
    midSort
  ]
  return compose(middlewares)(context)
}

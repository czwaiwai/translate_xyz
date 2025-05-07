
import {invert, difference, before} from 'lodash-es'
import {compose, getTypeObj, emptyNums, strTwoComb, strAdd, splitNum, getIndexs, logarithm, filterOdd, filterEven, filterBig, filterSmall} from '@/lib/utils.js'
import NodeNum from './nodeNum.js'
// 转为nodeNum对象
function midCreateNode(ctx, next) {
  let { nums, template } = ctx
  // 生成所有数
  ctx.nodes = nums.map(num => new NodeNum(num, template))
  ctx.res = ctx.nodes.reduce((before, node) => [...before, ...node.getNums()] ,[])
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

export const formP = {
  position: '1', // 定位置
  transform:  '0', // 配数全转
  ge: '',
  shi: '',
  bai: '',
  qian: '',
  pei1: '',
  pei2: '',
  pei3: '',
  fenhe: '1',
  he1: '',
  he1check: '',
  he2: '',
  he2check: '',
  he3: '',
  he3check: '',
  he4: '',
  he4check: '',
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
    // midTransForm,
    // midPeishu,
    // midBudinghe,
    // midContain,
    // midMulti,
    // midDouble,
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

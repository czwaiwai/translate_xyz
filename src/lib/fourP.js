import {invert, difference} from 'lodash-es'
import {compose, getTypeObj, emptyNums, strAdd, splitNum, getIndexs, logarithm, filterOdd, filterEven, filterBig, filterSmall} from '@/lib/utils.js'
import NodeNum from './nodeNum.js'


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
  pei4: '',
  fenhe: '',
  he1: '',
  he2: '',
  he3: '',
  he4: '',
  doubleGroup: '', // 双重
  doubleThreeGroup: '', // 三重
  doubleFourGroup: '', // 四重
  brotherGroup: '', // 二兄弟
  brotherThreeGroup: '', // 三兄弟
  brotherFourGroup: '', // 四兄弟
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
    // midCreateNode,
    // midPosition,
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

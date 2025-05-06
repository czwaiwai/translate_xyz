
import {difference} from 'lodash-es'
import {getAllPermutations, replaceChars, splitNum} from '@/lib/utils.js'
export default class NodeNum {
  constructor(num, template) {
    this.num = num
    this.template = template //  XX口口 |  X口口口  | 口口口口
    this.nums = this.getAllNums()
  }
  // 获取所有组合数字
  getAllNums() {
    // 通过template的到所有的组合
    let combs = getAllPermutations(this.template)
    return combs.map(temp => replaceChars(this.num + '', temp))
  }
  // 获取定位匹配的数字
  getPosiNums(qian, bai, shi, ge) {
    return this.nums.filter(comb => {
      let [q, b, s, g] = comb.split('')
      let b1 = qian ? qian.includes(q): true
      let b2 = bai ? bai.includes(b): true
      let b3 = shi ? shi.includes(s): true
      let b4 = ge ? ge.includes(g): true
      return b1 && b2 && b3 && b4
    })
  }
  // 定位除
  getChuPosiNums(qian, bai, shi, ge) {
    let nums = this.nums.filter(comb => {
      let [q, b, s, g] = comb.split('')
      let b1 = qian && q ==='X' ? false: true
      let b2 = bai && b === 'X' ? false: true
      let b3 = shi && s === 'X' ? false: true
      let b4 = ge  && g === 'X'? false: true
      return b1 && b2 && b3 && b4
    })
    return difference(nums, this.getPosiNums(qian, bai, shi, ge))
  }
  // 配数全转 取
  getTransNums(pei1, pei2) {
    this.nums.filter()
    // let [num1, num2] = this.num.split('')
    // if(pei1.includes(num1) && pei2.includes(num2)) {
    //   return this.nums
    // }
    // return []
  }
  // 配数全转 除
  getChuTransNums(pei1, pei2) {
    return difference(this.nums, this.getTransNums(pei1, pei2))
  }
}

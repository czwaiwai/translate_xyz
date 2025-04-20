import { emnum } from "./api"
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

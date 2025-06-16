function emptyNums(val) {
  if (!val) return '0123456789'
  return val.toString()
}

function peiFn(...peis) {
  const arrays = peis.map(emptyNums)
  const combinations = new Set()

  function combine(prefix, index, usedIndices = new Set()) {
    if (prefix.length === arrays.length) {
      combinations.add([...prefix].sort().join('')) // 排序后存储确保无序唯一
      return
    }
    for (let i = 0; i < arrays.length; i++) {
      if (!usedIndices.has(i)) {
        for (const item of arrays[i]) {
          combine(
            prefix + item,
            index + 1,
            new Set([...usedIndices, i]), // 记录已使用的数组索引
          )
        }
      }
    }
  }

  combine('', 0)
  return Array.from(combinations)
}

// 测试用例
console.log(peiFn('12', '34')) // ['13', '14', '23', '24']
console.log(peiFn('123', '1', '')) // ['11', '12', '13']
console.log(peiFn('123', '', ''))
console.log(peiFn('123', '45', '67')) // ['145', '146', '147', '245', '246', '247', '345', '346', '347']
console.log(peiFn('1', '2', '3', '4')) // ['1234']

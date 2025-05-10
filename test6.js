

function emptyNums(val) {
  if (!val) return '0123456789'
  return val.toString()
}
// function peiFn(...peis) {
//   const arrays = peis.map(emptyNums);
//   const combinations = [];

//   // 递归生成所有组合
//   function combine(prefix, index) {
//     if (index === arrays.length) {
//       combinations.push(prefix);
//       return;
//     }
//     for (const item of arrays[index]) {
//       combine(prefix + item, index + 1);
//     }
//   }

//   combine('', 0);
//   return combinations;
// }
// console.log(peiFn('123', '1'))

function peiFn(...peis) {
  const arrays = peis.map(emptyNums);
  const combinations = [];

  // 递归生成所有组合
  function combine(prefix, index) {
    if (index === arrays.length) {
      combinations.push(prefix);
      return;
    }
    for (const item of arrays[index]) {
      combine(prefix + item, index + 1);
    }
  }

  combine('', 0);
  return combinations;
}

// 测试用例
console.log(peiFn('123', '12')); // ['11', '12', '21', '22', '31', '32']
console.log(peiFn('123', '1', '')); // ['11', '12', '13']
console.log(peiFn('123', '45', '67')); // ['145', '146', '147', '245', '246', '247', '345', '346', '347']
console.log(peiFn('1', '2', '3', '4')); // ['1234']

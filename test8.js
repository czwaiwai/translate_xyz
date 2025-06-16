function generateArray(num1, num2, num3) {
  // 将输入的数字转换为字符串
  let str1 = num1.toString()
  let str2 = num2.toString()
  let str3 = num3.toString()

  // 初始化结果数组
  let result = []

  // 遍历三个字符串的每个字符，组合成新的字符串
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      for (let k = 0; k < str3.length; k++) {
        // 将三个字符串的字符组合
        result.push(str1[i] + str2[j] + str3[k])
      }
    }
  }

  // 交换顺序，生成所有可能的组合
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str3.length; j++) {
      for (let k = 0; k < str2.length; k++) {
        result.push(str1[i] + str3[j] + str2[k])
      }
    }
  }

  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      for (let k = 0; k < str3.length; k++) {
        result.push(str2[i] + str1[j] + str3[k])
      }
    }
  }

  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str3.length; j++) {
      for (let k = 0; k < str1.length; k++) {
        result.push(str2[i] + str3[j] + str1[k])
      }
    }
  }

  for (let i = 0; i < str3.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      for (let k = 0; k < str2.length; k++) {
        result.push(str3[i] + str1[j] + str2[k])
      }
    }
  }

  for (let i = 0; i < str3.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      for (let k = 0; k < str1.length; k++) {
        result.push(str3[i] + str2[j] + str1[k])
      }
    }
  }

  return result
}

function generateCombinations(...nums) {
  // 将所有输入数字转换为字符串数组
  const strArrays = nums.map((num) => num.toString().split(''))
  // 初始化结果数组
  const result = []

  // 生成所有可能的排列组合
  function permute(arrays) {
    if (arrays.length === 1) {
      // 如果只有一个数组，直接返回其字符数组
      return arrays[0].map((char) => [char])
    } else {
      // 递归生成前 n-1 个数组的组合
      const combinations = permute(arrays.slice(0, -1))
      // 将最后一个数组的每个字符与之前的组合拼接
      return combinations.flatMap((combination) =>
        arrays[arrays.length - 1].map((char) => combination.concat(char)),
      )
    }
  }

  // 生成所有可能的排列
  function getAllPermutations(arrays) {
    if (arrays.length === 1) {
      return [arrays]
    }
    const permutations = []
    for (let i = 0; i < arrays.length; i++) {
      const current = arrays[i]
      const remaining = arrays.slice(0, i).concat(arrays.slice(i + 1))
      const remainingPermutations = getAllPermutations(remaining)
      for (let perm of remainingPermutations) {
        permutations.push([current].concat(perm))
      }
    }
    return permutations
  }

  // 获取所有数组的排列
  const allPermutations = getAllPermutations(strArrays)

  // 对每个排列生成组合
  for (let permutation of allPermutations) {
    const combinations = permute(permutation)
    result.push(...combinations.map((combination) => combination.join('')))
  }

  return result
}

// 测试函数
let output = generateArray(12, 34, 56)
console.log(output)

// 测试函数
console.log(generateCombinations(12, 34))
console.log(generateCombinations(12, 34, 56))
console.log(generateCombinations(12, 34, 56, 78))

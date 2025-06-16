function generateArray(num1, num2) {
  // 将输入的数字转换为字符串
  let str1 = num1.toString()
  let str2 = num2.toString()

  // 初始化结果数组
  let result = []

  // 遍历第一个字符串的每个字符
  for (let i = 0; i < str1.length; i++) {
    // 遍历第二个字符串的每个字符
    for (let j = 0; j < str2.length; j++) {
      // 将第一个字符串的字符与第二个字符串的字符组合
      result.push(str1[i] + str2[j])
    }
  }

  // 再次交换顺序，进行组合
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      result.push(str2[i] + str1[j])
    }
  }

  return result
}
// 测试函数
let output = generateArray(12, 34)
console.log(output)

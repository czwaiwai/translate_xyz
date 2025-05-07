import {range, padStart, reduce, flatMap} from 'lodash-es'
// 生成一个字符串的所有组合
function getAllPermutations(str) {
  if (str.length !== 4) {
    throw new Error('Input string must be exactly 4 characters long');
  }

  const chars = str.split('');

  // 使用 reduce 生成所有可能的排列组合
  const permutations = reduce(
    chars,
    (result, char) => {
      if (result.length === 0) return [[char]];

      // 使用 flatMap 在每个现有排列的每个可能位置插入新字符
      return flatMap(result, (perm) => {
        const spots = Array(perm.length + 1).fill(null);
        return spots.map((_, i) => [
          ...perm.slice(0, i),
          char,
          ...perm.slice(i)
        ]);
      });
    },
    []
  );

  // 转换结果数组并去重
  return Array.from(
    new Set(
      permutations.map(arr => arr.join(''))
    )
  );
}

// 替换所有template中的口为数字
function replaceChars(str, template) {
  let index = 0;
  return template.replace(/口/g, () => (index < str.length ? str[index++] : '口'));
}

console.log(range(100).map(num => padStart(num, 2, '0')))


console.log(replaceChars('12', 'XX口口'))
console.log(getAllPermutations(replaceChars('12', 'XX口口')))


function generateTwoDigitCombinations(str1, str2) {
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
  return {
      count: combinations.length,
      combinations: combinations
  };
}

const str1 = "11223";
const str2 = "11223";
const result = generateTwoDigitCombinations(str1, str2);
console.log(`生成的两位字符串数量: ${result.count}`);
console.log(`生成的两位字符串组合: ${result.combinations}`);


function getAllTwoCharCombinations(str) {
  const result = [];
  const chars = str.split(''); // 将字符串拆分为字符数组
  for (let i = 0; i < chars.length; i++) {
      for (let j = 0; j < chars.length; j++) {
          if (i !== j) { // 确保两个字符不相同
              result.push(chars[i] + chars[j]);
          }
      }
  }
  return result;
}
console.log(getAllTwoCharCombinations('1'))


function getAllCombinations(str, combinationLength) {
  const result = [];
  const chars = str.split(''); // 将字符串拆分为字符数组

  // 递归函数，用于生成组合
  function generateCombinations(currentCombination, startIndex) {
      if (currentCombination.length === combinationLength) {
          result.push(currentCombination.join(''));
          return;
      }

      for (let i = 0; i < chars.length; i++) {
          if (currentCombination.indexOf(chars[i]) === -1) { // 确保字符不重复
              currentCombination.push(chars[i]);
              generateCombinations(currentCombination, i + 1);
              currentCombination.pop(); // 回溯，移除最后一个字符
          }
      }
  }

  generateCombinations([], 0);
  return result;
}

// 示例
const str = "1134";
const twoCharCombinations = getAllCombinations(str, 2);
console.log("二字组合:", twoCharCombinations);


const threeCharCombinations = getAllCombinations(str, 3);
console.log("三字组合:", threeCharCombinations);

const fourCharCombinations = getAllCombinations(str, 4); // 对于长度小于4的字符串，结果为空
console.log("四字组合:", fourCharCombinations);

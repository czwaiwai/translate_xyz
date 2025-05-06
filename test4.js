import { flatMap, reduce } from 'lodash-es';

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

// 测试示例
console.log('1234的所有组合:', getAllPermutations('口口口X'));
console.log('12XX的所有组合:', getAllPermutations('口口XX'));


function replaceChars(str, template) {
  let index = 0;
  return template.replace(/口/g, () => {
      return index < str.length ? str[index++] : '口';
  });
}

// 示例
const input = '123';
const output = replaceChars(input, '口X口口');
console.log(output);


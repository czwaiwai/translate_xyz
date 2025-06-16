console.log(/\/:(.*)$/.test('/red/allProducts'))
//
function toCamelCase(str) {
  if (!str || typeof str !== 'string') {
    return ''
  }

  const lowerStr = str.toLowerCase()
  return lowerStr.replace(/_([a-z])/g, (g) => g[1].toUpperCase())
}
console.log(toCamelCase('RED_ALL_PRO'))

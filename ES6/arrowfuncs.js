// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var inputs = process.argv.slice(2);
var result = inputs.map(
    x => x.charAt(0)
).reduce(
  (prev, curr) => prev + curr
)

console.log(`[${inputs}] becomes \"${result}\"`)

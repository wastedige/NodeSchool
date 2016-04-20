// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
var inputs = process.argv.slice(2);
var minfinder = function (arg) {
  var min;
  for ( var i = 0 ; i < arg.length ; i++ ) {
    if ( i == 0 )
      min = arg[i]
    else
      if ( arg [i] < min )
        min = arg [i]
  }
  return min;
}

console.log(`The minimum of [${inputs}] is ${minfinder(inputs)}`)

// 
// var numbers = process.argv.slice(2);
// var min = Math.min(...numbers);
//
// console.log(`The minimum of [${numbers}] is ${min}`);

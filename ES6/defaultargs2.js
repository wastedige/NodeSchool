module.exports = function makeImportant(arg, times = arg.length) {
  return `${arg}${"!".repeat(times)}`
}


// In JavaScript, unlike some other languages, default arguments can be expressions:
//
//     function log(arg, transform = x => x) {
//         console.log(transform(arg));
//     }
//
//     log("Hello");                       // => "Hello"
//     log("Hello", y => y.toUpperCase()); // => "HELLO"
//
// In this example, the default value for the transform argument is the identity function, x => x.
//
// Default argument values can even depend on earlier arguments:
//
//     function assertEquals5(val, error = `${val} does not equal 5!`) {
//         assert.strictEqual(val, 5, error);
//     }
//
//     assertEquals5(3); // "3 does not equal 5!"

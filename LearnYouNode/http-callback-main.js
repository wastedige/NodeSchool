var httpget = require('./http-callback-module.js');
var out1, out2, out3 = null;
httpget(process.argv[2], function(err, data){
  if (err) throw err;
  out1 = data.toString();
  httpget(process.argv[3], function(err, data){
    if (err) throw err;
    out2 = data.toString();
    //console.log ( data.toString() );
    httpget(process.argv[4], function(err, data){
      if (err) throw err;
      out3 = data.toString();
      printer();
    });
  });
});

var printer = function() {
  console.log(out1);
  console.log(out2);
  console.log(out3);
}


// ✓  Submission results match expected
//
// # PASS Your solution to JUGGLING ASYNC passed!
//
// Here's the official solution in case you want to compare notes:
//
// ─────────────────────────────────────────────────────────────────────────────
//
//    var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//
//    function printResults () {
//      for (var i = 0; i < 3; i++)
//        console.log(results[i])
//    }
//
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err)
//            return console.error(err)
//
//          results[index] = data.toString()
//          count++
//
//          if (count == 3)
//            printResults()
//        }))
//      })
//    }
//
//    for (var i = 0; i < 3; i++)
//      httpGet(i)

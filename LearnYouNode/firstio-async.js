var fs = require('fs');
var str;
function readlines(callback) {
  fs.readFile(process.argv[2], function(err, data){
    if (err) throw err;
    str = data.toString().split('\n');
    callback();
  });
}

function countOutput() {
    console.log(str.length - 1);
}

readlines(countOutput);

// https://github.com/maxogden/art-of-node#callbacks

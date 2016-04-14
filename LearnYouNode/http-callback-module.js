var http = require('http');
var output;

module.exports = function(arg, callback) {
  http.get(arg, function(response) {
    output = "";
    response.setEncoding('utf8');
    response.on('data', function(data){
      output = output + data.toString();
    });
    response.on('end', function(end){
      //console.log(output);
      callback(null, output);
    })
  })
}

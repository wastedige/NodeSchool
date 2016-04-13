var http = require('http');
var output = "";
http.get(process.argv[2], function(response) {
  response.on('data', function(data){
    output = output + data.toString();
  });
  response.on('end', function(end){
    console.log(output.length);
    console.log(output);
  })
})

var net = require('net')
// https://github.com/samsonjs/strftime
var strftime = require('strftime')
var server = net.createServer(function (socket) {
  // socket handling logic
  var currenttime = strftime('%F %H:%M');
  socket.end(currenttime + '\n');
})
server.listen(process.argv[2]);

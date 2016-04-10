var fs = require('fs');
var path = require('path');
var dirlist;

function dirlister(callback) {
  fs.readdir(process.argv[2], function(err, files){
      if (err) throw err;
      dirlist = files;
      callback();
  });
}

function printer() {
  // console.log(dirlist);
  for (var i = 0; i < dirlist.length; i++) {
    if ( path.extname( dirlist[i] ) == '.' + process.argv[3] )
      console.log( dirlist[i] );
  }
}

dirlister(printer);

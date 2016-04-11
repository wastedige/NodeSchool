var fs = require('fs');
var path = require('path');
returnArray = new Array();

module.exports = function dirlister(dirpath, ext, callback) {
  fs.readdir(dirpath, function(err, files){
      if (err) return callback(err);

      for (var i = 0; i < files.length; i++) {
        if ( path.extname( files[i] ) == '.' + ext )
          returnArray.push( files[i] );
      }
      callback(null, returnArray);

      // another approach for filtering the list:
      // list = list.filter(function (file) {
      //   return path.extname(file) === '.' + filterStr
      // })
  });
}

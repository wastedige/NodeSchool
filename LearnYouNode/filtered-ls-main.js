var dirlister = require ('./filtered-ls-module.js');

// callback module returns a value so we need to use a callback function as a parameter here
dirlister(process.argv[2], process.argv[3], function(err, data){
  if (err) throw err;
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});



var fs = require('fs');
var path = require('path')

module.exports = function (dir, ext, cb) { 


fs.readdir(dir, (err, files) => {
 if (err) 
  return cb(err);
 
 files = files.filter(function(file){
   return path.extname(file) === '.' + ext;
  })

  cb(null, files);
 });
}


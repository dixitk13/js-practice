const fileName = './day01/input.txt';

const readFileSplit = function (fileName, cb) {
  var fs = require('fs');
  
  fs.readFile(fileName, 'utf8', 
    function(err, contents){
      if (!err) cb(contents.split("\n"))
      else throw err
    }
  );
  
}

const chronalCalibration = function(lines) {
  return lines.reduce((acc, nxt) => acc + Number(nxt), 0);
}

const start = function() {
  readFileSplit(fileName, function(data) {    
    console.log(chronalCalibration(data))
  })
}


module.exports = {
  start
}
  
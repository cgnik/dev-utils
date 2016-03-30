var fs = require('fs');
var _ = require('underscore');

fileIn = process.argv[3]
tableName = process.argv[2];
console.log("Reading file " + fileIn)
var lineReader = require('readline').createInterface({
    input: fs.createReadStream(fileIn)
});

var lineCount = 0;
var columns = '';
lineReader.on('line', function (line) {
    if (lineCount != 0) {
        values = _.each(line.split(","), function(values) {

        }).map(function(value, index) {
            if( index == 8 || index == 1 || index == 2 || index == 3 || index == 4 ) {
                return "'" + value + "'"
            } else if( index > 8 ) {
                return value.replace("'", "")
            } else {
                return value.replace("\"", "'")
            }
        }).join(",");
        out("INSERT INTO "+tableName+"( " + columns + " ) VALUES( " + values + " );")
    } else {
        columns = line;
    }
    lineCount++;
});

var out = function (s) {
    console.log(s);
}

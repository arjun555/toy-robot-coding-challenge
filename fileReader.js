const fs = require('fs')

/*
    readFile - Reads the file and returns the data as utf8 encoded
*/
function readFile(filename){
    try{
        let data = fs.readFileSync(filename, 'utf8');
        console.log('File Loaded OK: ' + filename);
        return data
    }catch(err){
        console.error(err)
    }
}

/*
    convertDataToArray - converts data into a string and returns an array of each new line
*/
function convertDataToArray(data){
    return data.toString().split("\n")
}




module.exports = {
    readFile: readFile,
    convertDataToArray: convertDataToArray
}
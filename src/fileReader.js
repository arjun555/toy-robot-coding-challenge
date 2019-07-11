const fs = require('fs')

/*
    readFile - Reads the file and returns the data as utf8 encoded
*/
function readFile(filename){
    try{
        let data = fs.readFileSync(filename, 'utf8');
        console.log('File Loaded OK: ' + filename);
        return data.toString().split("\n")
    }catch(err){
        console.error(err)
    }
}

/*
    getCommandFromLine - returns the command (first word) from an input line
*/
function getCommandFromLine(line){
    return line.split(' ')[0]
}

/*
    getPlaceCommandArgs - returns the arguments that are sent with the 'PLACE' command
*/
function getPlaceCommandArgs(line){
    // split command arguements from Place command
    let index = line.indexOf(' ')
    let args = line.slice(index + 1, ).split(',')
    // clear any whitespace leftover from user input
    args = args.map(value => value.trim())
    return args
}

module.exports = {
    readFile: readFile,
    getCommandFromLine: getCommandFromLine,
    getPlaceCommandArgs: getPlaceCommandArgs
}


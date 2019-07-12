const fs = require('fs')

/*
    readFile - Reads the file and returns the data as utf8 encoded
*/
function readFile(filename){
    try{
        isValidTextFile(filename)
        let data = fs.readFileSync(filename, 'utf8');
        console.log('Yay! The command file Loaded OK from: ' + filename);
        return data.toString().split("\n")
    }catch(err){
        if(err instanceof TypeError){
            console.log('Please load a .txt file')
        }
        console.log('File could not be loaded')
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

/*
    isValidTextFile - checks if the filename is of type .txt
*/
function isValidTextFile(filename){
    let index = filename.lastIndexOf('.')
    let fileType= filename.slice(index +1)

    if(fileType === 'txt'){
        return true
    }else{
        throw TypeError("File must be of type .txt")
    }
}

module.exports = {
    readFile: readFile,
    getCommandFromLine: getCommandFromLine,
    getPlaceCommandArgs: getPlaceCommandArgs,
    isValidTextFile: isValidTextFile
}


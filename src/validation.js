const orientations = ['north', 'south', 'east', 'west']

/*
    validateOrientation - checks the user input matches expected orientation strings
*/
function isOrientationValid(orientation){
    if(orientations.includes(orientation.toLowerCase())){
        return true
    }else{
        console.log('Requested orientation is not recognized. Please use north, south, east or west')
        return false
    }
}

module.exports = {
    isOrientationValid: isOrientationValid
}               
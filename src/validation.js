const orientations = ['north', 'south', 'east', 'west']

function validateOrientation(orientation){
    if(orientations.includes(orientation.toLowerCase())){
        return true
    }else{
        console.log('Requested orientation is not recognized. Please use north, south, east or west')
        return false
    }
}

module.exports = {
    validateOrientation: validateOrientation
}               
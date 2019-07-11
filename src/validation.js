const orientations = ['north', 'south', 'east', 'west']

// Check the requested X position is within the table bounds
function validateX(x, tableX){
    if(x<= tableX && x >= 0){
        return true
    }else{
        console.log('Requested X Position is not within the table')
        return false
    }
}

// Check the requested Y position is within the table bounds
function validateY(y, tableY){
    if(y<= tableY && y >= 0){
        return true
    }else{
        console.log('Requested Y Position is not within the table')
        return false
    }
}

function validateOrientation(orientation){
    if(orientations.includes(orientation)){
        return true
    }else{
        console.log('Requested orientation is not recognized. Please use north, south, east or west')
        return false
    }
}


module.exports = {
    validateX: validateX,
    validateY: validateY,
    validateOrientation: validateOrientation
}               
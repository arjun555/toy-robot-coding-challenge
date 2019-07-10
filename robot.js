
class Robot{

    constructor(){
        this.limits = {
            xMax: 5,
            xMin: 0,
            yMax: 5,
            yMin: 0
        }
        
        this.position = {
            x: 0,
            y: 0,
            orientation: 'north'
        }
    }

    place (x, y, orientation){
        // set position of robot
        this.position = {
            x: x,
            y: y,
            orientation: orientation 
        }
    }
}

module.exports = {
    Robot: Robot
}



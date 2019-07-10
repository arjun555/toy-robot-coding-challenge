class Robot{

    constructor(){
        this.position = {
            x: 0,
            y: 0,
            orientation: 'north'
        }
        this.placed = false
    }

    place (x, y, orientation){
        // set position of robot
        this.position = {
            x: x,
            y: y,
            orientation: orientation 
        }
        // set robot to be placed
        this.placed = true
    }

}

module.exports = {
    Robot: Robot
}



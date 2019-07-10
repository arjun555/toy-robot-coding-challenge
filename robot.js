class Robot{

    constructor(){
        this.position = {
            x: 0,
            y: 0,
            orientation: 'north'
        }
        this.placed = false
    }

    /*
        Place - places the robot at the specified x/y position facing the given orientation
    */
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

    /*
        Move - moves the robot one unit in the direction of it's orientation
    */
    move (){
        switch(this.position.orientation){
            case 'north':
                this.position.y += 1
                break;
            case 'east':
                this.position.x += 1
                break;
            case 'south':
                this.position.y -= 1
                break;
            case 'west':
                this.position.x -= 1
                break;
            default:
                // do nothing
                break;
        }
    }

    /*
        Left - Rotate the robot left from its current orientation
    */
    left(){
        switch(this.position.orientation){
            case 'north':
                this.position.orientation = 'west'
                break;
            case 'east':
                this.position.orientation = 'north'
                break;
            case 'south':
                this.position.orientation = 'east'
                break;
            case 'west':
                this.position.orientation = 'south'
                break;
            default:
                // do nothing
                break;
        }
   }
}

module.exports = {
    Robot: Robot
}



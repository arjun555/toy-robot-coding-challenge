class Robot{

    constructor(table){
        this.position = {
            x: 0,
            y: 0,
            orientation: 'north'
        }
        this.placed = false,
        this.table = table
    }

    /*
        Place - places the robot at the specified x/y position facing the given orientation
    */
    place (x, y, orientation){
        if (this.table.isPositionWithinTableBounds(x, y)){
            // set position of robot
            this.position = {
                x: Number(x),
                y: Number(y),
                orientation: orientation.toLowerCase() 
                }
            // set robot to be placed
            this.placed = true
        }
    }

    /*
        Move - moves the robot one unit in the direction of it's orientation
    */
    move (){
        if(this.placed){
            switch(this.position.orientation){
                case 'north':
                    if (this.table.isPositionWithinTableBounds(this.position.x, this.position.y + 1)){
                        this.position.y += 1
                    }
                    break;
                case 'east':
                    if (this.table.isPositionWithinTableBounds(this.position.x + 1, this.position.y)){
                        this.position.x += 1
                    }
                    break;
                case 'south':
                    if (this.table.isPositionWithinTableBounds(this.position.x, this.position.y - 1)){
                        this.position.y -= 1
                    }
                    break;
                case 'west':
                    if (this.table.isPositionWithinTableBounds(this.position.x - 1, this.position.y)){
                        this.position.x -= 1
                    }
                    break;
                default:
                    // do nothing
                    break;
            }
        }
    }

    /*
        Left - Rotate the robot left from its current orientation
    */
    left(){
        if(this.placed){
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

    /*
        Right - Rotate the robot right from its current orientation
    */
   right(){
        if(this.placed){
            switch(this.position.orientation){
                case 'north':
                    this.position.orientation = 'east'
                    break;
                case 'east':
                    this.position.orientation = 'south'
                    break;
                case 'south':
                    this.position.orientation = 'west'
                    break;
                case 'west':
                    this.position.orientation = 'north'
                    break;
                default:
                    // do nothing
                    break;
            }
        }
    }

    /*
        Report - Return the robot's position and orientation
    */
   report(){
       return `${this.position.x}, ${this.position.y}, ${this.position.orientation.toUpperCase()}`
   }
}

module.exports = {
    Robot: Robot
}



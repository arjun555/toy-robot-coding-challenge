class Table {

    constructor(width, height){
        this.dimensions = {
            x: width,
            y: height
        }
    }

    /*
        isPositionWithinTableBounds - checks input positions are within the bounds of the table width/height
    */
    isPositionWithinTableBounds(posX, posY){
        if(posX <= this.dimensions.x && posY <= this.dimensions.y && posX >= 0 && posY >= 0){
            return true
        }else{
            console.log(`The given positions are outside of the table bounds`)
            return false
        }
    }
}

module.exports = {
    Table: Table
}
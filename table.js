class Table {

    constructor(width, height){
        this.dimensions = {
            x: width,
            y: height
        }
    }

    isPositionWithinTableBounds(posX, posY){
        if(posX <= this.dimensions.x && posY <= this.dimensions.y && posX >= 0 && posY >= 0){
            return true
        }else{
            return false
        }
    }
}

module.exports = {
    Table: Table
}
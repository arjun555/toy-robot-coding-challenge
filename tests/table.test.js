const {Table} = require('../src/table')

describe('Table Class', ()=>{

    let RobotTable = new Table(5, 5)
    it('has dimensions of 5 by 5', ()=>{
        expect(RobotTable.dimensions).toMatchObject({
            x: 5,
            y: 5
        })
    })

    it('will return false if the input positions are out of the table bounds', ()=>{
        expect(RobotTable.isPositionWithinTableBounds(6, 6)).toBe(false)
    })

    it('will return true if the input positions equal the table bounds', ()=>{
        expect(RobotTable.isPositionWithinTableBounds(5, 5)).toBe(true)
    })

    it('will return false if the input positions are less than 0', ()=>{
        expect(RobotTable.isPositionWithinTableBounds(0, -1)).toBe(false)
    })
})
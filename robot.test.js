const {Robot} = require('./robot')

describe('Robot Commands', ()=> {

    let TestRobot = new Robot();
    test('that the default position for the robot is 0, 0, north and placed is false', ()=>{
        obj = {
                position: {x: 0, y:0, orientation: 'north'}, 
                placed: false
            }
        expect(TestRobot).toMatchObject(obj)
    })

    test("that calling place() sets the robot property 'placed' to be true", ()=>{
        TestRobot.place(2, 2, 'south')
        expect(TestRobot.placed).toBe(true)
    })

    test('that place(2, 2, south) sets the robot position', ()=>{
        TestRobot.place(2, 2, 'south')
        expect(TestRobot.position).toStrictEqual({
            x: 2,
            y: 2,
            orientation: 'south'
        })
    })
})

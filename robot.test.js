const {Robot} = require('./robot')

describe('Robot Commands', ()=> {

    let TestRobot = new Robot();
    test('that the default position for the robot is 0, 0, north', ()=>{
        expect(TestRobot.position).toStrictEqual({
            x: 0, 
            y:0, 
            orientation: 'north'
        })
    })

    test('that place(2, 2, south) sets the robot position and orientation', ()=>{
        TestRobot.place(2, 2, 'south')
        expect(TestRobot.position).toStrictEqual({
            x: 2,
            y: 2,
            orientation: 'south'
        })
    })
})

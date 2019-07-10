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

    test('that move() with the orientation as north, increments the y position', ()=>{
        TestRobot.place(0, 0, 'north')
        TestRobot.move()
        expect(TestRobot.position).toStrictEqual({
            x: 0,
            y: 1,
            orientation: 'north'
        })
    })

    test('that move() with the orientation as east, increments the x position', ()=>{
        TestRobot.place(0, 0, 'east')
        TestRobot.move()
        expect(TestRobot.position).toStrictEqual({
            x: 1,
            y: 0,
            orientation: 'east'
        })
    })

    test('that move() with the orientation as south, decrements the y position', ()=>{
        TestRobot.place(5, 5, 'south')
        TestRobot.move()
        expect(TestRobot.position).toStrictEqual({
            x: 5,
            y: 4,
            orientation: 'south'
        })
    })

    test('that move() with the orientation as west, decrements the x position', ()=>{
        TestRobot.place(5, 5, 'west')
        TestRobot.move()
        expect(TestRobot.position).toStrictEqual({
            x: 4,
            y: 5,
            orientation: 'west'
        })
    })

    test('that left() with the orientation as north, sets the orientation to west', ()=>{
        TestRobot.place(0, 0, 'north')
        TestRobot.left()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'west'
        })
    })

    test('that left() with the orientation as east, sets the orientation to north', ()=>{
        TestRobot.place(0, 0, 'east')
        TestRobot.left()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'north'
        })
    })

    test('that left() with the orientation as south, sets the orientation to east', ()=>{
        TestRobot.place(0, 0, 'south')
        TestRobot.left()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'east'
        })
    })

    test('that left() with the orientation as west, sets the orientation to south', ()=>{
        TestRobot.place(0, 0, 'west')
        TestRobot.left()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'south'
        })
    })

    test('that right() with the orientation as north, sets the orientation to east', ()=>{
        TestRobot.place(0, 0, 'north')
        TestRobot.right()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'east'
        })
    })

    test('that right() with the orientation as east, sets the orientation to south', ()=>{
        TestRobot.place(0, 0, 'east')
        TestRobot.right()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'south'
        })
    })

    test('that right() with the orientation as south, sets the orientation to west', ()=>{
        TestRobot.place(0, 0, 'south')
        TestRobot.right()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'west'
        })
    })

    test('that right() with the orientation as west, sets the orientation to north', ()=>{
        TestRobot.place(0, 0, 'west')
        TestRobot.right()
        expect(TestRobot.position).toMatchObject({
            x: 0,
            y: 0,
            orientation: 'north'
        })
    })

    test('that report() will return the robot position and orientation', ()=>{
        TestRobot.place(0, 0, 'north')
        expect(TestRobot.report()).toMatch('0, 0, NORTH')
    })


})

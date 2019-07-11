const {readFile, getCommandFromLine, getPlaceCommandArgs} = require('./fileReader')

describe('Test File Reader', ()=>{

    it('opens the file and returns the data', ()=>{
        let data = readFile('test.txt')
        let arr = ["hello world"]
        expect(data).toMatchObject(arr)
    })

    it('opens the file and returns multiple lines of commands as an array', ()=>{
        let data = readFile('testCommands.txt')
        let arr = [
            "PLACE 1,2,NORTH",
            "MOVE",
            "LEFT",
            "RIGHT",
            "REPORT",
        ]
        expect(data).toMatchObject(arr)
    })

    it('gets the first word from a line of text', ()=>{
        let input = "move"
        expect(getCommandFromLine(input)).toBe("move")
    })

    it('gets the first word from a line of text, of multiple words', ()=>{
        let input = "place 1,3,north"
        expect(getCommandFromLine(input)).toBe("place")
    })

    it('returns the PLACE command args as an array of 3 elements', ()=>{
        let input = "place 1,3,north"
        let arr = ["1", "3", "north"]
        expect(getPlaceCommandArgs(input)).toMatchObject(arr)
    })
})

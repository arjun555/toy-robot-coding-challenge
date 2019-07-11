const {readFile, convertDataToArray} = require('./fileReader')

describe('Test File Reader', ()=>{

    it('opens the file and returns the data', ()=>{
        let data = readFile('test.txt')
        let result = ["hello world"]
        expect(data).toBe('hello world')
    })

    it('creates an array by splitting strings at the newline character', ()=>{
        let data = "Hello World\nSecond Line"
        let arr = ["Hello World", "Second Line"]
        expect(convertDataToArray(data)).toMatchObject(arr)
    })
})
const {place} = require('./robotCommands')

describe('Robot Commands', ()=> {

    test('that place() returns false', ()=>{
        expect(place()).toBe(false)
    })
})

const {validateX, validateY, validateOrientation} = require('../src/validation')

describe('Input position values are validation', ()=> {

    let table = {xPosition: 5, yPosition: 5}

    test('that an X position equal to 0 is detected within bounds', ()=>{
        expect(validateX(0, table.xPosition)).toBe(true)
    })

    test('that an X position equal to the bounds, is detected as within bounds', ()=>{
        expect(validateX(5, table.xPosition)).toBe(true)
    })

    test('that an X position is detected out of bounds', ()=>{
        expect(validateX(6, table.xPosition)).toBe(false)
    })

    test('that an Y position equal to 0 is detected within bounds', ()=>{
        expect(validateY(0, table.yPosition)).toBe(true)
    })

    test('that an Y position equal to the bounds, is detected as within bounds', ()=>{
        expect(validateY(5, table.yPosition)).toBe(true)
    })

    test('that an Y position is detected out of bounds', ()=>{
        expect(validateY(6, table.yPosition)).toBe(false)
    })
})

describe('Input orientation values are valid', ()=>{

    test('that north is a detected as a valid orientation', ()=>{
        expect(validateOrientation('north')).toBe(true)
    })

    test('that south is a detected as a valid orientation', ()=>{
        expect(validateOrientation('south')).toBe(true)
    })

    test('that east is a detected as a valid orientation', ()=>{
        expect(validateOrientation('east')).toBe(true)
    })

    test('that west is a detected as a valid orientation', ()=>{
        expect(validateOrientation('west')).toBe(true)
    })

    test('that northhh is a detected as an invalid orientation', ()=>{
        expect(validateOrientation('northhh')).toBe(false)
    })

})

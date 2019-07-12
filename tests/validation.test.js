const {validateOrientation} = require('../src/validation')

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

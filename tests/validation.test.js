const {isOrientationValid} = require('../src/validation')

describe('Input orientation values are valid', ()=>{

    test('that north is a detected as a valid orientation', ()=>{
        expect(isOrientationValid('north')).toBe(true)
    })

    test('that south is a detected as a valid orientation', ()=>{
        expect(isOrientationValid('south')).toBe(true)
    })

    test('that east is a detected as a valid orientation', ()=>{
        expect(isOrientationValid('east')).toBe(true)
    })

    test('that west is a detected as a valid orientation', ()=>{
        expect(isOrientationValid('west')).toBe(true)
    })

    test('that northhh is a detected as an invalid orientation', ()=>{
        expect(isOrientationValid('northhh')).toBe(false)
    })

})

import {capitalize, reverse, calculator, caesarCipher, analyzeArray} from './app.js'
it ('Capitalize test', () => {
    expect(capitalize('jesus')).toBe('Jesus')
})

it ('Reverse test', () => {
    expect(reverse('tom')).toBe('mot')
})

it ('Calculator (Add)', () => {
    expect(calculator.add(2,5)).toBe(7)
})

it ('Calculator (Subtract)', () => {
    expect(calculator.subtract(2,5)).toBe(-3)
})

it ('Calculator (Division)', () => {
    expect(calculator.divide(2,5)).toBe(2/5)
})

it ('Calculator (multiply)', () => {
    expect(calculator.multiply(2,5)).toBe(10)
})

it ('caesar Cipher (Test #1)', () => {
    expect(caesarCipher('this is a test case for a string', 7))
    .toBe('aopz pz h alza jhzl mvy h zaypun')
})

it ('caesar Cipher (Test #2)', () => {
    expect(caesarCipher('w/Punctuation!',7))
    .toBe('d/Wbujabhapvu!')
})

it ('analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6]))
    .toEqual({average: 4, min: 1, max: 8, length: 6})
})
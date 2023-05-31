import { randomFillSync } from "crypto"

export function capitalize(string) {
    let newString = ''
    for (const letter of string) {
        if (newString.length == 0) {
            newString += letter.toUpperCase()
        } else {
            newString += letter.toLowerCase()
        }
    }
    return newString
}

export function reverse(string) {
    let arrayBuild = []
    for (const letter of string) {
        arrayBuild.push(letter)
    }
    let finalString = ''
    arrayBuild.reverse().forEach(letter => {
        finalString += letter
    })
    return finalString
}   

export const calculator = {
    add: function(num1, num2) {
        return parseFloat(num1) + parseFloat(num2)
    },
    subtract: function(num1, num2) {
        return parseFloat(num1) - parseFloat(num2)
    },
    multiply: function(num1, num2) {
        return parseFloat(num1) * parseFloat(num2)
    },
    divide: function(num1, num2) {
        return parseFloat(num1) / parseFloat(num2)
    }
}

export function caesarCipher(text, offSet) {
    function checkOver(number) {
        if (number >= 26) {
            return number - 26
        } else {
            return number
        }
    } 
    const alpha = ['a','b','c','d','e','f','g','h','i',
                   'j','k','l','m','n','o','p','q','r',
                   's','t','u','v','w','x','y','z']
    const textArray = []
    for (const letter of text) {
        if (letter == ' ') {
            textArray.push(' ')
        } else {
            textArray.push(letter)
        }
    }
    let resultString = ''
    textArray.forEach(letter => {
        const index = checkOver(alpha.indexOf(letter.toLowerCase()) + offSet)
        if (!alpha.includes(letter.toLowerCase())) {
            return resultString += letter
        } else if (!alpha.includes(letter)) {
            return resultString += alpha[index].toUpperCase()
        } 
        else {
            return resultString += alpha[index]
        }
    })
    return resultString
}

export function analyzeArray(array) {
    function average(array) {
        let number = 0
        array.forEach(num => number += num)
        return (number / array.length)
    }
    function min(array) {
        let min = array[0];
        array.forEach(number => {
            if (min > number) min = number
        });
        return min
    }
    function max(array) {
        let max = 0
        array.forEach(number => {
            if (max < number) max = number
        });
        return max
    }
    const obj = {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length
    }
    return obj
}
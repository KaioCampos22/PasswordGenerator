

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const fieldUpperCase = () => String.fromCharCode(rand(65, 91))
const fieldLowerCase = () => String.fromCharCode(rand(97, 123))
const fieldNumber = () => String.fromCharCode(rand(48, 58))
const symbols = '.;~^[]{}!@#$%¨*()_+=-'
const fieldSymbols = () => symbols[rand(0, symbols.length)]

export default function generatePass(qtd, uppercase, lowercase, number, symbols) {
    const passArray = []
    qtd = Number(qtd)


    for (let i = 0; i < qtd; i++) {
        uppercase && passArray.push(fieldUpperCase())
        lowercase && passArray.push(fieldLowerCase())
        number && passArray.push(fieldNumber())
        symbols && passArray.push(fieldSymbols())
    }

    return passArray.join('').slice(0, qtd)
}


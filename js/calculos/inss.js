import {imprime} from "../imprime.js"

const tetoInss = 6433.57;

function calculaInss(proLabore, inss) {
    if (proLabore > tetoInss) {
        inss = 707.69
        const textoInss = `INSS: R$ ${inss.toFixed(2)}`
        imprime(textoInss)
    } if (proLabore <= tetoInss) {
        inss = (proLabore * 0.11)
        const textoInss = `INSS: R$ ${inss.toFixed(2)}`
        imprime(textoInss)
    }
    
    return inss
}

export default calculaInss
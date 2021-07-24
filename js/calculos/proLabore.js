import {imprime} from "../imprime.js"

function calculaProLabore(faturamento, proLabore) {
    proLabore = Number(faturamento) * 0.28
    const textoProLabore = `Pro Labore: R$ ${proLabore.toFixed(2)}`
    imprime(textoProLabore)
    return proLabore
}

export default calculaProLabore
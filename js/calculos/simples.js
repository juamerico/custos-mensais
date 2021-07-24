import {imprime} from "../imprime.js"

function calculaSimples(faturamento, simples) {
    simples = Number(faturamento) * 0.06
    const textoSimples = `Simples: R$ ${simples.toFixed(2)}`
    imprime(textoSimples)
    return simples
}

export default calculaSimples
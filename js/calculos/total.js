import {imprimeTotal} from "../imprime.js"

function calculaTotal(total, mensalidade, simples, irrf, inss) {
    total = (Number(mensalidade) + simples + irrf + inss)
    console.log(simples)
    imprimeTotal(total)
    return total
}

export default calculaTotal
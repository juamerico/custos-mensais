import {imprimeAliquota} from "../imprime.js"

function calculaAliquotaEfetiva(total, faturamento) {
    const aliquotaEfetiva = (total * 100) / faturamento
    imprimeAliquota(aliquotaEfetiva)
}

export default calculaAliquotaEfetiva

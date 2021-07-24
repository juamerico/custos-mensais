import {imprime} from "../imprime.js"

const baseIrrf = [
    0, 1903.98,
    1903.99, 2826.65,
    2826.66, 3751.05,
    3751.06, 4664.68
];

const aliquotaIrrf = [
    0,
    0.075,
    0.150,
    0.2250,
    0.2750
];

const deducaoIrrf = [
    0,
    142.8,
    354.8,
    636.13,
    869.36
];

function calculaIrrf(proLabore, irrf) {
    if (proLabore >= baseIrrf[0] && proLabore <= baseIrrf[1]) {
        irrf = "ISENTO"
        const textoIrrf = `IRRF: ISENTO`
        imprime(textoIrrf)
    }
    if (proLabore >= baseIrrf[2] && proLabore <= baseIrrf[3]) {
        irrf = Number((proLabore * aliquotaIrrf[1]) - deducaoIrrf[1])
        const textoIrrf = `IRRF: R$ ${irrf.toFixed(2)}`
        imprime(textoIrrf)
    }
    if (proLabore >= baseIrrf[4] && proLabore <= baseIrrf[5]) {
        irrf = Number(proLabore * aliquotaIrrf[2] - deducaoIrrf[2])
        const textoIrrf = `IRRF: R$ ${irrf.toFixed(2)}`
        imprime(textoIrrf)
    }
    if (proLabore >= baseIrrf[6] && proLabore <= baseIrrf[7]) {
        irrf = Number(proLabore * aliquotaIrrf[3] - deducaoIrrf[3])
        const textoIrrf = `IRRF: R$ ${irrf.toFixed(2)}`
        imprime(textoIrrf)
    }
    if (proLabore > baseIrrf[7]) {
        irrf = Number(proLabore * aliquotaIrrf[4] - deducaoIrrf[4])
        const textoIrrf = `IRRF: R$ ${irrf.toFixed(2)}`
        imprime(textoIrrf)
    }
   
    return irrf
}

export default calculaIrrf
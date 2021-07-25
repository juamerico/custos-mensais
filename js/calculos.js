import {imprime} from "./imprime.js"
import calculaSimples from "./calculos/simples.js"
import calculaProLabore from "./calculos/proLabore.js"
import calculaInss from "./calculos/inss.js"
import calculaIrrf from "./calculos/irrf.js"
import calculaTotal from "./calculos/total.js"
import calculaAliquotaEfetiva from "./calculos/aliquotaEfetiva.js"

const areaImpressao = document.querySelector(".area-impressao")
const botao = document.querySelector("button")
const faturamento = document.querySelector("#input__faturamento")
const mensalidade = document.querySelector("#input__mensalidade")

function botaoCalcular(e) {
    areaImpressao.textContent = ""
    e.preventDefault()

    const valorFaturamento = faturamento.value
    const textoFaturamento = `Faturamento: R$ ${Number(valorFaturamento).toFixed(2)}`
    imprime(textoFaturamento)
 
    let simples = 0
    simples = calculaSimples(valorFaturamento, simples)
    
    let proLabore = 0
    proLabore = calculaProLabore(valorFaturamento, proLabore)

    let inss = 0
    inss = calculaInss(proLabore, inss)

    let irrf = 0
    irrf = calculaIrrf(proLabore, irrf)

    const valorMensalidade = mensalidade.value
    const textoMensalidade = `Mensalidade escritório: R$ ${Number(valorMensalidade).toFixed(2)}`
    imprime(textoMensalidade)

    let total = 0
    total = calculaTotal(total, valorMensalidade, simples, irrf, inss)

    calculaAliquotaEfetiva(total, valorFaturamento)
}

//
botao.addEventListener("click", botaoCalcular)
faturamento.focus()
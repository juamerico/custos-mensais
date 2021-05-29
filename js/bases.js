//alíquotas e bases:
var tetoInss = 6433.57;

var baseIrrf = [0, 1903.98, 1903.99, 2826.65, 2826.66, 3751.05, 3751.06, 4664.68];

var aliquotaIrrf = [0, 0.075, 0.150, 0.2250, 0.2750];

var deducaoIrrf = [0, 142.8, 354.8, 636.13, 869.36];

//variáveis:
var areaImpressao = document.querySelector(".area-impressao");

var botao = document.querySelector("button");

var faturamento = document.querySelector("#input__faturamento");
var mensalidade = document.querySelector("#input__mensalidade");

var simples;
var proLabore;
var inss;
var irrf;
var total;
var aliquotaEfetiva;

//funções:
function imprime(texto, valor) {
    var impressao = document.createElement("li");
    impressao.classList.add("resultado");
    impressao.textContent = texto + valor;
    areaImpressao.appendChild(impressao);
}

function imprimeTotal(valor) {
    var impressaoTotal = document.createElement("li");
    impressaoTotal.classList.add("total");
    impressaoTotal.textContent = "Total: R$ " + valor;
    areaImpressao.appendChild(impressaoTotal);
}

function imprimeAliquota(valor) {
    var impressaoAliquota = document.createElement("li");
    impressaoAliquota.classList.add("aliquota");
    impressaoAliquota.textContent = "Alíquota efetiva de impostos: " + valor;
    areaImpressao.appendChild(impressaoAliquota);
}


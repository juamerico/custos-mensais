const areaImpressao = document.querySelector(".area-impressao")

export function imprime(texto) {
    const impressao = document.createElement("li");
    impressao.classList.add("resultado");
    impressao.insertAdjacentHTML("afterbegin", texto)
    areaImpressao.appendChild(impressao);
}

export function imprimeTotal(valor) {
    const impressaoTotal = document.createElement("li");
    impressaoTotal.classList.add("total");
    impressaoTotal.insertAdjacentHTML("afterbegin", `Total: R$ ${valor.toFixed(2)}`)
    areaImpressao.appendChild(impressaoTotal);
}

export function imprimeAliquota(valor) {
    const impressaoAliquota = document.createElement("li");
    impressaoAliquota.classList.add("aliquota");
    impressaoAliquota.textContent = `Alíquota efetiva de impostos: ${valor}%`;
    areaImpressao.appendChild(impressaoAliquota);
}

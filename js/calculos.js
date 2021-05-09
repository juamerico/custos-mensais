function botaoCalcular(event) {
    areaImpressao.textContent = "";

    event.preventDefault();

    imprime("Faturamento: R$", Number(faturamento.value).toFixed(2));

    calculaSimples(faturamento);
    imprime("Simples: R$", simples.toFixed(2));

    calculaProLabore(faturamento);
    imprime("Pro Labore: R$", proLabore.toFixed(2));

    calculaInss(proLabore);
    imprime("INSS: R$ ", inss.toFixed(2));

    calculaIrrf(proLabore);
    if (irrf > 0) {
        imprime("IRRF: R$", irrf.toFixed(2));
    } else {
        imprime("IRRF: ", "Isento");
    }

    imprime("Mensalidade escritório: R$", Number(mensalidade.value).toFixed(2));

    calculaTotal();
    imprimeTotal(total.toFixed(2));

    calculaAliquotaEfetiva(total, faturamento);
    imprimeAliquota(aliquotaEfetiva.toFixed(2));
}

//

function calculaSimples(faturamento) {
    simples = Number(faturamento.value) * 0.06;
    return simples;
}

function calculaProLabore(faturamento) {
    proLabore = Number(faturamento.value) * 0.28;
    return proLabore;
}

function calculaInss(proLabore) {
    if (proLabore > tetoInss) {
        return inss = 707.69;
    } if (proLabore <= tetoInss) {
        return inss = proLabore * 0.11;
    }
}

function calculaIrrf(proLabore) {
    if (proLabore >= baseIrrf[0] && proLabore <= baseIrrf[1]) {
        return irrf = 0;
    }
    if (proLabore >= baseIrrf[2] && proLabore <= baseIrrf[3]) {
        return irrf = Number((proLabore * aliquotaIrrf[1]) - deducaoIrrf[1]);
    }
    if (proLabore >= baseIrrf[4] && proLabore <= baseIrrf[5]) {
        return irrf = Number(proLabore * aliquotaIrrf[2] - deducaoIrrf[2]);
    }
    if (proLabore >= baseIrrf[6] && proLabore <= baseIrrf[7]) {
        return irrf = Number(proLabore * aliquotaIrrf[3] - deducaoIrrf[3]);
    }
    if (proLabore > baseIrrf[7]) {
        return irrf = Number(proLabore * aliquotaIrrf[4] - deducaoIrrf[4]);
    }
}

function calculaTotal() {
    total = Number(mensalidade.value) + simples + irrf + inss;
    return total;
}

function calculaAliquotaEfetiva(total, faturamento) {
    aliquotaEfetiva = (total * 100) / Number(faturamento.value);
    return aliquotaEfetiva;
}


botao.addEventListener("click", botaoCalcular);
faturamento.focus();
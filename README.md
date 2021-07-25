## https://juamerico.github.io/custos-mensais/

## Simulação de custos mensais - Matriz Soluções Contábeis

Pequeno sistema de simulação de despesas mensais para empresas enquadradas no Simples Nacional. Ao inserir o valor de faturamento mensal e o custo da mensalidade do escritório de contabilidade, o programa calcula um valor aproximado a ser pago dos seguintes impostos e despesas:
- INSS
- IRRF
- Simples Nacional
- Pro Labore
Além de realizar a soma do valor total, e da alíquota efetiva que os impostos representam em relação ao faturamento.

### Calculando os valores
<sup>custos-mensais/js/[calculos.js](https://github.com/juamerico/custos-mensais/blob/main/js/calculos.js)</sup>\
Clicar no botão *Calcular* chama as diversas funções referentes aos cálculos dos impostos e despesas, assim como a impressão destes valores na tela.\
As funções são as seguintes:

#### Simples Nacional
<sup>custos-mensais/js/calculos/[simples.js](https://github.com/juamerico/custos-mensais/blob/main/js/calculos/simples.js)</sup>\
Recebe como parâmetros o faturamento, informado pelo usuário, e uma variável `simples` inicializada com valor `0`.\
Realiza um cálculo de porcentagem do faturamento.\
Após realizar o cálculo, retona o valor na variável `simples` para ser reutilizada mais tarde por outras funções.

#### Pro Labore
<sup>custos-mensais/js/calculos/[proLabore.js](https://github.com/juamerico/custos-mensais/blob/main/js/calculos/proLabore.js)</sup>\
Recebe como parâmetros o faturamento, informado pelo usuário, e uma variável `proLabore` inicializada com valor `0`.\
Realiza um cálculo de porcentagem do faturamento.\
Após realizar o cálculo, retona o valor na variável `proLabore` para ser reutilizada mais tarde por outras funções.

#### INSS
<sup>custos-mensais/js/calculos/[inss.js](https://github.com/juamerico/custos-mensais/blob/main/js/calculos/inss.js)</sup>\
Recebe como parâmetros a variável `proLabore`, e uma variável `inss` inicializada com valor `0`.\
Realiza um cálculo de acordo com o valor do `proLabore`, verificando se este ultrapassa o teto do INSS.\
Após realizar o cálculo, retona o valor na variável `inss` para ser reutilizada mais tarde por outras funções.

#### IRRF
<sup>custos-mensais/js/calculos/[irrf.js](https://github.com/juamerico/custos-mensais/blob/main/js/calculos/irrf.js)</sup>\
Recebe como parâmetros a variável `proLabore` e uma variável `irrf` inicializada com valor `0`.\
Verifica em qual índice do array `baseIrrf` o referido valor de Pro Labore se encaixa, para então aplicar o cálculo de acordo com a alíquota correta, assim como aplicar a dedução referente à faixa apropriada.\
Após realizar o cálculo, retona o valor na variável `inss` para ser reutilizada mais tarde por outras funções.

#### Total
<sup>custos-mensais/js/calculos/[total.js](https://github.com/juamerico/custos-mensais/blob/main/js/calculos/total.js)</sup>\
Recebe como parâmetros uma variável `total` inicializada com valor `0`, e as variáveis `mensalidade`, `simples`, `irrf` e `inss`.\
Realiza a soma do total de todas as despesas e retorna o valor na variável `total` para ser reutilizada mais tarde por outras funções.

#### Alíquota Efetiva
<sup>custos-mensais/js/calculos/[aliquotaEfetiva.js](https://github.com/juamerico/custos-mensais/blob/main/js/calculos/aliquotaEfetiva.js)</sup>\
Recebe como parâmetros as variáveis `total` e `mensalidade`, para realizar o cálculo da alíquota efetiva total de despesas em relação ao faturamento informado pelo usuário.
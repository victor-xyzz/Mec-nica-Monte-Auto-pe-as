const VALOR_MAO_DE_OBRA = 100;

const btnCalcular = document.getElementById("btn-calcular");
const resultadoTotal = document.getElementById("resultado-total");

btnCalcular.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll('input[name="servicos"]:checked');
    const clienteCadastrado = document.getElementById("cliente-cadastrado").checked;

    if (checkboxes.length === 0) {
        resultadoTotal.textContent = "Total Estimado: R$ 0,00 (Selecione ao menos um item)";
        return;
    }

    let totalItens = 0;
    checkboxes.forEach((item) => {
        totalItens += Number(item.value);
    });

    let maoDeObra = VALOR_MAO_DE_OBRA;
    if (clienteCadastrado) {
        maoDeObra = maoDeObra - (maoDeObra * 0.10);
    }

    const totalFinal = totalItens + maoDeObra;

    const formatarMoeda = (valor) => valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    if (clienteCadastrado) {
        resultadoTotal.innerHTML = `
            Total Estimado: ${formatarMoeda(totalFinal)} <br>
            <small>(Peças/Serviços: ${formatarMoeda(totalItens)} + Mão de obra com 10% OFF: ${formatarMoeda(maoDeObra)})</small>
        `;
    } else {
        resultadoTotal.innerHTML = `
            Total Estimado: ${formatarMoeda(totalFinal)} <br>
            <small>(Peças/Serviços: ${formatarMoeda(totalItens)} + Mão de obra: ${formatarMoeda(maoDeObra)})</small>
        `;
    }
});
function getById(id) {
    return document.getElementById(id);
}

getById("btnEvento").addEventListener("click", function () {
    let textoIdade = getById("campoIdade").value;
    let ingresso = getById("campoIngresso").value.toLowerCase();
    let convite = getById("campoConvite").value.toLowerCase();
    let bloqueadaTexto = getById("campoBloqueada").value.toLowerCase();
    let saida = getById("saidaEvento");

    if (textoIdade == "") {
        saida.innerText = "Informe a idade.";
        return;
    }

    let idade = Number(textoIdade);

    if (!Number.isInteger(idade) || idade < 0) {
        saida.innerText = "Digite uma idade inteira não negativa.";
        return;
    }

    if ((ingresso != "sim" && ingresso != "nao") ||
        (convite != "sim" && convite != "nao") ||
        (bloqueadaTexto != "sim" && bloqueadaTexto != "nao")) {
        saida.innerText = "Digite apenas sim ou nao, sem acento.";
        return;
    }

    let temIngresso = ingresso == "sim";
    let temConvite = convite == "sim";
    let bloqueada = bloqueadaTexto == "sim";

    if (idade >= 16 && (temIngresso || temConvite) && !bloqueada) {
        saida.innerText = "Entrada permitida.";
    } else {
        saida.innerText = "Entrada não permitida.";
    }
});

getById("btnCalcular").addEventListener("click", function () {
    let textoNum1 = getById("campoNum1").value;
    let textoNum2 = getById("campoNum2").value;
    let operacao = getById("campoOperacao").value;
    let saida = getById("saidaCalculadora");

    if (textoNum1 == "" || textoNum2 == "") {
        saida.innerText = "Preencha os dois números.";
        return;
    }

    let num1 = Number(textoNum1);
    let num2 = Number(textoNum2);

    if (isNaN(num1) || isNaN(num2)) {
        saida.innerText = "Digite valores numéricos.";
        return;
    }

    switch (operacao) {
        case "+":
            saida.innerText = "Resultado: " + (num1 + num2);
            break;
        case "-":
            saida.innerText = "Resultado: " + (num1 - num2);
            break;
        case "*":
            saida.innerText = "Resultado: " + (num1 * num2);
            break;
        case "/":
            if (num2 == 0) {
                saida.innerText = "Erro: divisão por zero.";
            } else {
                saida.innerText = "Resultado: " + (num1 / num2);
            }
            break;
        default:
            saida.innerText = "Operação desconhecida. Use +, -, * ou /.";
    }
});

getById("btnPares").addEventListener("click", function () {
    let texto = getById("campoN").value;
    let saida = getById("saidaPares");

    if (texto == "") {
        saida.innerText = "Informe o valor de N.";
        return;
    }

    let n = Number(texto);

    if (!Number.isInteger(n) || n < 1 || n > 100) {
        saida.innerText = "Digite um número inteiro de 1 a 100.";
        return;
    }

    let lista = "";
    let quantidade = 0;
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            if (quantidade > 0) {
                lista += ", ";
            }
            lista += i;
            quantidade++;
            soma += i;
        }
    }

    if (quantidade == 0) {
        saida.innerText = "Não há números pares no intervalo.\n" +
            "Quantidade: 0\n" +
            "Soma: 0";
    } else {
        saida.innerText = "Números pares: " + lista + "\n" +
            "Quantidade: " + quantidade + "\n" +
            "Soma: " + soma;
    }
});

getById("btnEconomia").addEventListener("click", function () {
    let textoMeta = getById("campoMeta").value;
    let textoDeposito = getById("campoDeposito").value;
    let saida = getById("saidaEconomia");

    if (textoMeta == "" || textoDeposito == "") {
        saida.innerText = "Preencha a meta e o depósito mensal.";
        return;
    }

    let meta = Number(textoMeta);
    let deposito = Number(textoDeposito);

    if (!Number.isInteger(meta) || meta < 1 || meta > 10000 ||
        !Number.isInteger(deposito) || deposito < 1 || deposito > 10000) {
        saida.innerText = "Digite valores inteiros de 1 a 10000 nos dois campos.";
        return;
    }

    let saldo = 0;
    let quantidade = 0;

    saida.innerText = "";

    while (saldo < meta) {
        saldo += deposito;
        quantidade++;
        saida.innerText += "Depósito " + quantidade + ": R$ " + saldo + "\n";
    }

    saida.innerText += "Depósitos necessários: " + quantidade + "\n";
    saida.innerText += "Saldo final: R$ " + saldo;
});

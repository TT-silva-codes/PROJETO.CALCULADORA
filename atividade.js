// pega o botão
const botao = document.getElementById("btnEnter");

// quando clicar no botão
botao.addEventListener("click", calcular);

// quando apertar ENTER no teclado
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        calcular();
    }
});

function calcular() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let op = document.getElementById("operacao").value;
    let erro = document.getElementById("erro");

    erro.textContent = "";

    // validação
    if (n1 === "" || n2 === "") {
        erro.textContent = "Preencha os campos!";
        return;
    }

    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        erro.textContent = "Digite números válidos!";
        return;
    }

    let resultado;

    if (op === "+") resultado = num1 + num2;
    if (op === "-") resultado = num1 - num2;
    if (op === "*") resultado = num1 * num2;
    if (op === "/") {
        if (num2 === 0) {
            erro.textContent = "Divisão por zero!";
            return;
        }
        resultado = num1 / num2;
    }

    // MOSTRA O RESULTADO NA HORA
    document.getElementById("resultado").textContent =
        "Seu resultado é: " + resultado;
}
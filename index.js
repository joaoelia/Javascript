function capturarInformacoes() {
    let nome = window.prompt("Por favor, digite seu nome:");
    let sobrenome = window.prompt("Por favor, digite seu sobrenome:");
    let campoDeEstudo = window.prompt("Por favor, digite seu campo de estudo:");
    let anoDeNascimento = window.prompt("Por favor, digite seu ano de nascimento:");

    console.log("Nome: " + nome);
    console.log("Sobrenome: " + sobrenome);
    console.log("Campo de Estudo: " + campoDeEstudo);
    console.log("Ano de Nascimento: " + anoDeNascimento);

    window.alert("Nome: " + nome + "\nSobrenome: " + sobrenome + "\nCampo de Estudo: " + campoDeEstudo + "\nAno de Nascimento: " + anoDeNascimento);

}
capturarInformacoes();

function calcular(numero1, operador, numero2) {
    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Erro: Divisão por zero!";
            }
        default:
            return "Operador inválido";
    }
}

function calculadora() {
    var numero1 = parseFloat(prompt("Digite o primeiro número:"));
    var operador = prompt("Digite o operador que você deseja! (+, -, *, /):");
    var numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var resultado = calcular(numero1, operador, numero2);

    alert("O resultado é: " + resultado);
}
calculadora();

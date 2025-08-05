function resultado() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const res = document.getElementById("resultado");

    if (isNaN(n1) || isNaN(n2)) {
        res.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    const soma = n1 + n2;
    res.textContent = `Resultado da soma: ${soma}`;
}

function teste2() {
    const valor = parseInt(document.getElementById("parOuImpar").value);
    const imgDiv = document.getElementById("img4");

    if (isNaN(valor)) {
        imgDiv.textContent = "Digite um número válido.";
        return;
    }

    if (valor % 2 === 0) {
        imgDiv.textContent = `${valor} é par.`;
    } else {
        imgDiv.textContent = `${valor} é ímpar.`;
    }
}
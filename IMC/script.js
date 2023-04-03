function calc() {

    let imc;
    let resultado = document.getElementById("resultado");
    let categoria = document.getElementById("categoria");

    let peso = parseInt(document.getElementById("peso").value);
    document.getElementById("pesoVal").textContent = peso + "kg";


    let altura = parseInt(document.getElementById("altura").value);
    document.getElementById("alturaVal").textContent = altura + "cm";

    imc = (peso / Math.pow((altura / 100), 2)).toFixed();
    resultado.textContent = imc;


    if (imc < 16) {

        categoria.innerText = "Magreza Grau III";
        resultado.style.color = "orange";
    } else if (imc >= 16 && imc <= 16.9) {

        categoria.innerText = "Magreza Grau II";
        resultado.style.color = "#0be881";
    } else if (imc >= 17 && imc <= 18.4) {

        categoria.innerText = "Magreza Grau I";
        resultado.style.color = "#ff884d";
    } else if (imc >= 18.5 && imc <= 24.9) {

        categoria.innerText = "Normal";
        resultado.style.color = "green";
    }
    else if (imc >= 25 && imc <= 29.9) {

        categoria.innerText = "Sobrepeso";
        resultado.style.color = "red";
    }
    else if (imc >= 30 && imc <= 34.9) {

        categoria.innerText = "Obesidade Grau I";
        resultado.style.color = "red";
    }
    else if (imc >= 35 && imc <= 40) {

        categoria.innerText = "Obesidade Grau II";
        resultado.style.color = "red";
    }
    else

        categoria.innerText = "Obesidade Grau III";





}
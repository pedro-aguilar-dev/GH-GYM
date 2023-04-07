function calc() {

    let imc;
    let result = document.getElementById("result");
    let category = document.getElementById("category");

    let weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weVal").textContent = weight + "kg";


    let height = parseInt(document.getElementById("height").value);
    document.getElementById("heVal").textContent = height + "cm";

    imc = (weight / Math.pow((height / 100), 2)).toFixed();
    result.textContent = imc;


    if (imc < 16) {

        category.innerText = "Magreza Grau III";
        result.style.color = "orange";
    } else if (imc >= 16 && imc <= 16.9) {

        category.innerText = "Magreza Grau II";
        result.style.color = "#0be881";
    } else if (imc >= 17 && imc <= 18.4) {

        category.innerText = "Magreza Grau I";
        result.style.color = "#ff884d";
    } else if (imc >= 18.5 && imc <= 24.9) {

        category.innerText = "Normal";
        result.style.color = "green";
    }
    else if (imc >= 25 && imc <= 29.9) {

        category.innerText = "Sobrepeso";
        result.style.color = "red";
    }
    else if (imc >= 30 && imc <= 34.9) {

        category.innerText = "Obesidade Grau I";
        result.style.color = "red";
    }
    else if (imc >= 35 && imc <= 40) {

        category.innerText = "Obesidade Grau II";
        result.style.color = "red";
    }
    else

        category.innerText = "Obesidade Grau III";





}
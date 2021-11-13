function calcular() {
    const numero = document.getElementById("numero").value

    
    if(numero % 3 === 0 & numero % 5 === 0){
        const texto = numero + " é divisivel por 3 e po 5"
        document.getElementById("resultado").innerHTML = texto
        console.log("fizzBuzz");
    }else if(numero % 3 === 0) {
        const texto = numero + " é divisivel por 3"
        document.getElementById("resultado").innerHTML = texto
        console.log("fizz");
    } else if (numero % 5===0){
        const texto = numero + " é divisivel por 5"
        document.getElementById("resultado").innerHTML = texto
        console.log("fizzBuzz");
    } else {
        const texto = numero +" não é divisivel nem por 3 e por 5"
        document.getElementById("resultado").innerHTML = texto
    }
}
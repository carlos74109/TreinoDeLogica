
function calculo() {
    const celsius = document.getElementById("celsius").value

    const fahrenheit = celsius * 1.8 + 32

    const texto = celsius + " graus foram convertidos para " + fahrenheit.toFixed(1) + " fahrenheit" 

    document.getElementById("teste").innerHTML = texto
    
    
}


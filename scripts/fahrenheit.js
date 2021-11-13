function calcular() {
    const fahrenheit  = document.getElementById("fahrenheit").value 

    const celsius = (fahrenheit - 32) /1.8 

    const texto = fahrenheit + " fahrenheit foi convertido para " + celsius.toFixed(1) + " graus"
    document.getElementById("resultado").innerHTML = texto
}
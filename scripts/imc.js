function calcular() {
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
   
    const total = peso / (altura * altura)

    if(total < 18.5){
        const escrita = "seu imc é " + total.toFixed(1) + " vc está abaixo do peso"
        document.getElementById("resultado").innerHTML = escrita
    }else if( total <= 24.9) {
        const escrita = "seu imc é " + total.toFixed(1) + " vc está com o peso normal"
        document.getElementById("resultado").innerHTML = escrita
    }else if (total < 29.9){
        const escrita = "seu imc é " + total.toFixed(1) + " vc está com sobrepeso" 
        document.getElementById("resultado").innerHTML = escrita
    }else if(total < 34.9) {
        const escrita = "seu imc é " + total.toFixed(1) + " vc está com obesidade grau 1"
        document.getElementById("resultado").innerHTML = escrita
    }else if (total < 39.9){
        const escrita = "seu imc é " + total.toFixed(1) + " vc está com obesidade grau 2"
        document.getElementById("resultado").innerHTML = escrita
    }else {
        const escrita = "seu imc é " + total.toFixed(1) + " vc está com obesidade grau 3, morbidade"
        document.getElementById("resultado").innerHTML = escrita
    }
}
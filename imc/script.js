// criar variaveis para receber os elementos html
let $btnCalcular = document.getElementById('calcular')
let $resultado = document.getElementById('valor')
let $imc = null
let $msg = null


//alert($resultado)

$btnCalcular.addEventListener('click', calcularIMC) 

function calcularIMC() {
    let $nome = document.getElementById('nome').value   
    let $altura = document.getElementById('altura').value
    let $peso = document.getElementById('peso').value

    if($nome != '' && $altura != '' && $peso != '') {
        //replace para substituir a vírgula por ponto
        $altura = $altura.replace(',', '.')
        $peso = $peso.replace(',', '.')

        //convertendo strings para valores numéricos
        $altura = parseFloat($altura)
        $peso = parseFloat($peso)

        //calculo do imc
        $imc = $peso / ($altura * $altura)

        if($imc < 18){
            $msg = 'Você está abaixo do peso ideal!'
        } else if($imc < 25){
            $msg = 'Você está no peso ideal!'
        } else if($imc < 30){
            $msg = 'Você está com sobrepeso!'
        } else if($imc < 35){
            $msg = 'Você está com obesidade grau 1!'
        } else if($imc < 40){
            $msg = 'Você está com obesidade grau 2!'
        } else{
            $msg = 'Você está com obesidade grau 3!'
        }

        $resultado.innerText = `${$nome}, seu IMC é ${$imc.toFixed(2)}. ${$msg}`
    } else {
        alert('Você não preencheu todos os campos!')
    }
}
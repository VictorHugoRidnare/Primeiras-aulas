// Olá, apenas um comentário
function Converter () {
    let valorEmdolar = parseFloat(document.getElementById("valor").value)
    let converteEmDollar = (valorEmdolar*5.23).toFixed(2)
    let RealConvertido = document.getElementById("valorConvertido")
    if (converteEmDollar<=0){
        RealConvertido.innerHTML = "Valor inválido"
    } else{
        RealConvertido.innerHTML = "Dólar em R$ " + converteEmDollar
    }
}
function ConverterBitcoin (){
    let valorEmBTC = parseFloat(document.getElementById("valor").value)
    let converteEmBTC = (valorEmBTC*0.000053).toFixed(6)
    let bitcoinConvertido = document.getElementById("valorConvertido2")
        if(converteEmBTC <= 0){
            bitcoinConvertido.innerHTML = "Valor inválido"
        } else{
            bitcoinConvertido.innerHTML = "Dólar em Bitcoin " + converteEmBTC
        }
}
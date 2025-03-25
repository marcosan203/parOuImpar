const numeroJs = document.getElementById("numero");
const mensagemJs = document.getElementById("mensagem");
const mostrarResultadoJs = document.getElementById("mostrarResultado");

function MostrarResultado() {

    if (numeroJs.value != "") {
        //Declarar e inializar a variavel número//
        var numeroInteiro = 0;

        //Declarar e inicializar a variavel mensagem//
        var mensagemClc = "";

        //coletar o valor digitado no numero
        numeroInteiro = numeroJs.value;

        //Declarar e inicializar a variavel rest//
        var resto = 0;

        //Dividir o numero por 2 e obeter o resto//
        resto = numeroInteiro % 2;

        //gerar a mensagem com base no conteudo do rsto//
        if (resto == 0) {
            mensagemClc = "O numero informado é Par"
        }
        else {
            mensagemClc = "Onumero informado é Impar"
        }
        mensagemJs.innerText = mensagemClc;
    }else{
        alert("Por favor informe um numero inteiro para prosseguir");
    }

}
mostrarResultadoJs.addEventListener("click", MostrarResultado)


//definição de variaveis globais
var largura = 0;
var altura = 0;
var vidas = 1;
var tempo = 10;
var tempoMilissegundos = 1500;


var nivel = window.location.search;
nivel = nivel.replace('?','');

if(nivel === 'normal'){
    tempoMilissegundos = 1500;
}else if(nivel === 'dificil'){
    tempoMilissegundos = 1250;
}else if (nivel === 'chucknorris'){
    tempoMilissegundos = 1000;
}


function ajustarTamanhoTela(){
    //pegar largura da janela do browser
    largura = window.innerWidth;

    //pegar altura da janela do browser
    altura = window.innerHeight;

}

ajustarTamanhoTela();

var cronometro = setInterval(function(){   
    
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = 'vitoria.html';
    }else{
        tempo--;
        document.getElementById('cronometro').innerHTML = tempo;
    }
    
   
},1000);

function posicaoRandom(){
    
    //remove o mosquito se existir
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
    
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html';
        }else{
            document.getElementById('v'+vidas).src = 'images/coracao_vazio.png';
            vidas++;
        }       
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    
    //criar um elemento html (mosquito)
    var mosquito = document.createElement('img');

    //definir o caminho da imagem
    mosquito.src = 'images/mosquito.png';

    //definir a classe da imagem
    mosquito.className = tamanhoRandom() + ' ' + ladoRandom();

    //posicionar o mosquito na tela
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';

    //atribuir o evento de onclick no mosquito
    mosquito.onclick = function(){
        this.remove();
    }

    //atribuir um id para o mosquito
    mosquito.id = 'mosquito';

    //adicionar ao body o elemento criado
    document.body.appendChild(mosquito); 
}

function tamanhoRandom(){
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1';
        break;
    
        case 1:
            return 'mosquito2';
        break;

        case 2:
            return 'mosquito3';
        break;
    }
}

function ladoRandom(){
    var lado = Math.floor(Math.random() * 2);

    switch (lado) {
        case 0:
            return 'ladoDir';
        break;
    
        case 1:
            return 'ladoEsq';
        break;

    }
}

var videoGames=['Switch','PS4','Xbox'];

videoGames.pop();
videoGames.push('3DS');
videoGames.length;

// USANDO O FOR


 for (var numero= 0;numero<=10; numero++){
      console.log(numero);
}

// USANDO O WHILE


 var i=0;
 while(i<10){
    console.log(i);
    i++;
}

// MANEIRA MAIS COMUM DE USAR O FOR


var videoGamess =['Switch','PS4','Xbox','3DS' ];

for(var item=0; item<videoGamess.length; item++){
    console.log(videoGamess[item]);
}

// USANDO O BREACK

var videoGamesss= ['Switch','PS4','Xbox','3DS' ];
for (var i=0; i<videoGamesss.length; i++){
    console.log(videoGamesss[i]);
    if(videoGamesss[i]==='PS4'){
        break;
    }
}

// USANDO O FOREACH

var frutas= ['banana','pera','uva','maçã','abacaxi' ];
frutas.forEach(function(fruta, index, array){
    console.log(fruta, index,array);
});




//EXERCICIOS

//CRIE UMA ARRAY COM OS ANOS QUE O BRASIL GANHOU A COPA (1959, 1962, 1970, 1994, 2002)

var copasGanhas=[1959, 1962, 1970, 1994, 2002];
console.log(copasGanhas);

//INTERAJA COM O ARRAY UTILIZANDO UM LOOP, PARA MOSTRAR NO CONSOLE A SEGUINTE MENSAGEM,
//'O BRASIL GANHOU A COPA DE ${ano}'

var copasGanhass=[1959, 1962, 1970, 1994, 2002];
for(var i=0; i<copasGanhass.length; i++){
    console.log(`O BRASIL GANHOU A COPA DE ` + copasGanhass[i]);
}



//INTERAJA COM UM LOOP NAS FRUTAS ABAIXO E PARE AO CHEGAR EM PERA
var frutass=['banana','maçã', 'pera', 'uva', 'melancia'];
    for(var i=0; i<frutass.length; i++){
        console.log(frutass[i]);
        if(frutass[i]==='pera'){
            break;
        }
    }



//COLOQUE A ULTIMA FRUTA DA ARRAY ACIMA EM UMA VARIAVEL SEM REMOVER A MESMA DA ARRAY

var ultimaFruta= frutass[frutass.length -1];
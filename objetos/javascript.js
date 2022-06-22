// var pessoa={
//     nome: 'andré',
//     idade:25,
// }



var quadrado= {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados*lado;
    }

}
console.log(quadrado.area(5));
console.log(quadrado.perimetro (5));





var menu={
    width:800,
    height:60,
    backgroundColor:'#84E',
    metadeHeight(){
        return this.height/2;
    }
} 



// CRIE UM ABJETO COM SEUS DADOS PESSOAIS

var dados={
    nome: 'Giselly',
    sobrenome: 'Avelino Pereira',
    idade:20,
    cursaFaculdade: true,
    corPreferida: 'preto',
    
}


// CRIE UM METODO NO OBJETO ANTERIOR, QUE MOSTRE SEU NOME COMPLETO

dados.nomeCompleto=function(){
    return `${this.nome} ${this.sobrenome}`
}

console.log(dados.nomeCompleto())


// MODIFIQUE O VALOR DA PRAPRIEDADE PRECO PARA 3000

var carro={
    preco:1000,
    portas:4,
    marca:'Audi',
}

carro.preco=3000;
console.log(carro.preco);

// CRIE UM OBJETO DE UM CACHORRO QUE REPRESENTE UM LABRADOR, PRETO COM 10 ANOS,QUE LATE AO VER UM HOMEM

var cachorro={
    raca:'labrador',
    cor:'preto',
    idade:10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return'latir';
        }else{
            return 'nada';
        }
    }

}


  //NOMEIE 3 PROPRIEDADES OU METODOS DE STRINGS


//   var casa= 'amarela'
//  slice
//  match
//  split

  //NOMEIE 5 PROPRIEADADEWS OU METODOS DE ELEMENTOS DO DOM


// addEventListener
// oppendChild
// id
// innerHtml
// outerHtml


  //BUSQUE NA WEB UM OBJETO (MÉTODO) CAPAZ DE INTERAGIR COM O CLIPBOARD,CLIPBOARD É A PARTE DO SEU COMPUTADOR QUE LIDA COM O CTRL + V

  
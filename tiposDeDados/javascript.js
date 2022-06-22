var nome='giselly';// string
var idade= 20; //number
var possueFaculdade=true; //boolean
var time; //Undefine
var comida= null; //null
var simbolo=Symbol() //symbol
var novoObjeto={} //object


//swith

// var corFavorita='preto';
// switch(corFavorita){
    // case 'azul':
        // console.log('Olhe para o céu');
        // break;
    
    // case 'verde':
        // console.log('Olhe para a floresta');
        // break

    // case 'amarelo':
        // console.log('Olhe para o sol');
        // break; 

    // default:
        // console.log('Feche os olhos');
// }





// EXERCÍCIO


//VERIFIQUE SE A SUA IDADE É MAIOR DO QUE A DE ALGUM PARENTE
//DEPENDENDO DO RESULTADO COLOQUE NO CONSOLE SE É MAIOR OU MENOR

var minhaIdade=20;
var idadeParente=20;

if(minhaIdade>idadeParente){
    console.log('sua idade é maior que a de seu parente')
}else if(minhaIdade===idadeParente){
    console.log('as idades são iguais')
}else{
    console.log('sua idade é menor que a de seu parente')
};

//QUAL VALOR É RETORNADO NA SEGUINTE EXPRESSÃO?

var expressao=(5-2) && (5-'') && (5-2);
console.log(expressao);


// COMPARE O TOTAL DE HABITANTES VARIÁVEIS SÃO TRUTHY OU FALSY(VALOR EM MILHÔES)

var brasil=207;
var china=1340;



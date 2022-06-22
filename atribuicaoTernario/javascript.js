var numero =20;

numero+= 10; //numero=numero+10;
console.log(numero);

numero-=10;
console.log(numero);

numero*=10;
console.log(numero);

numero/=10;
console.log(numero);

numero%=10;
console.log(numero);

numero**=10;
console.log(numero);


// OPERADOR TERNÁRIO

var idade=19;
var naoPossuiDiabetes= false;

var podeBeber= (idade>=18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);


//EXERCICIO

// SOME 500 AO VALOR DE SCROLL

var scroll = 1000;
scroll+=500;
console.log(scroll)

//ATRIBUA TRUE PARA A VARIÁVEL darCREDITO, CASO O CLIENTE POSSUA CARRO E CASA
//E FALSE CASO O CONTRARIO

var possuiCarro= true;
var possuiCasa= false;
var darCredito=(possuiCarro && possuiCasa) ?
'Seu crédito foi liberado' :'Infelizmente seu crédito não foi liberado'
console.log(darCredito);

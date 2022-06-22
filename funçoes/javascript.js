function areaQuadrado(lado){
    return lado*lado;
}
console.log(areaQuadrado(10));



function pi(){
    return 3.14;
}

var total = 5 * pi();
console.log(total);



function imc(peso,altura){
    var imc= peso/(altura* altura);
    return imc;
}

console.log(imc(87, 1.67));


function corPreferida(cor){
    if(cor==='azul'){
        return'você gosta do céu';    
    }else if(cor==='verde'){
        return'você gosta de mato';
    }else if(cor==='amarelo'){
        return'você gosta de ouro';
    }else if(cor==='laranja'){
        return'você gosta de tangerina';
    }else if(cor==='vermelho'){
        return'você gosta de flores';
    }else{
        return'vai a merda você não gosta de nada';
    }
    }

    console.log(corPreferida('preto'));






    addEventListener('click',function(){console.log('oi')});

    //    OU     //

    function mostraConsole(){
        console.log('hello');
    }

    addEventListener('click',mostraConsole);





//CRIE UMA FUNÇÃO PARA VERIFICAR SE UM VALOR É TRUTHY


function idadeDaAdolecencia(idade){
    if( (idade>=12) || (idade<=17)){
        return true
    }else{
        return false
    };
    
}


console.log(idadeDaAdolecencia(10));

//CRIE UMA FUNÇÃO MATEMÁTICA QUE RETORNE O PERÍMETRO DE UM QUADRADO


function perimetro(ladoQuadrado){
    return ladoQuadrado*4
};

console.log(`O perímetro do quadrado é de ${perimetro(73.2)}`);


// CRIE UMA FUNÇÃO QUE RETORNE SEU NOME COMPLETO

function nomeCompleto(primeiroNome,sobrenome){
    return primeiroNome+sobrenome
};

console.log(nomeCompleto('giselly ' ,'pereira'));

//CRIE UMA FUNÇÃO QUE VERIFICA SE UM NÚMERO É PAR

function ePar(parr){
    var modulo= parr%2;
    if(modulo===0){
        return true;
    }else{
        return false;
    }
};

// ULTILIZE A FUNÇÃO ADDEVENTLISTENER PARA MOSTRAR NO CONSOLE SEU NOME COMPLETO QUANDO O EVENTO 'SCROLL' OCORRER

addEventListener('scroll',function(){
    console.log('Giselly Avelino Pereira')
});

//CORRIJA O ERRO ABAIXO


var totalPaises=193;
function precisoVisitar(paisesVisitados){
    
    return`Ainda faltam ${totalPaises- paisesVisitados} países para visitar!`
};

function jaVisitei(paisesVisitados){
    
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
};

console.log(precisoVisitar(16));
console.log(jaVisitei(16));

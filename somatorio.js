function primeira(){
    vetor = [1, 3 , 5, -8, 2, 9, -1, 0, 7, 3 ]

console.log(vetor)
soma = 0

for(i=0; i<10; i++){
    soma = soma + vetor[i]
}

console.log(soma);
}



//////////////////////////////////////////////////

function segunda (){

    vetor2 = []

    for(i=0; i< 100; i++){
        vetor2[i] = i+1
    }

console.log(vetor2);
}

//////////////////////////////////////////////////
function terceira (){

    vetor3 = []

    for(i=0; i< 100; i++){
        if(i%2==0){
            vetor3.push(i)
        }
    }

console.log(vetor3);


}




//////////////////////////////////////////////////

function quarta(){
    vetor = [1, 3 , 5, -8, 2, 9, -1, 11, 7, 3 ]

    par = 0

    for(i=0; i< 10; i++){
        if(vetor[i]%2==0){
            par ++
        }
    }

console.log(`No vetor de 10 posicoes, ${par} sao pares e ${10-par} sao impares`);
    

}

//////////////////////////////////////////////////

function quinta(valor){
    buscar = 0
    vetor = [1, 2 , 5, -8, 2, 9, -1, 0, 2, 3 ]

    for(i=0; i< 10; i++){
        if(vetor[i]==valor){
            buscar ++
        }
    }

    console.log(`O numero ${valor} aparece ${buscar} vezes`)
}


//////////////////////////////////////////////////
quarta()

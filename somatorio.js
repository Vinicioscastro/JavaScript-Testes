
//////////////////////////////////////////////////

// Somando todos os numero do vetor 
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

// Armazenando 100 numeros em um vetor
function segunda (){

    vetor2 = []

    for(i=0; i< 100; i++){
        vetor2[i] = i+1
    }

console.log(vetor2);
}

//////////////////////////////////////////////////

// Armazenando os numeros pares entre 0 e 100 em um vetor
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

// Contando quantos pares e quantos impares dentro do vetor de 10 posições

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

// Contando quantas vezes o mesmo numero se repete dentro do vetor, recebendo por parametro. 

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


primeira()
segunda()
terceira()
quarta()
quinta(2)
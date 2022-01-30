var objeto = {
    nome: 'iker',
    idade: 22
}

console.log(objeto)

objeto.cidade = "caxias"

console.log(objeto)

objeto['idade']=23

console.log(objeto)

delete objeto.idade

objeto.idade = 22

console.log(objeto)

for(key in objeto){
    console.log(key+ ": "+objeto[key])
}

function soma(){
    console.log(2+3);
}

soma()
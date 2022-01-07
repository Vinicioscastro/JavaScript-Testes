console.log("HEllo World")

var nome = "vinicios"

if (nome == "vinicios") {
    console.log("1")
    console.log(nome)
    var nome2 = "iker"
    console.log(nome2)
}

console.log(nome)

console.log(nome2)

for(let i=0; i<11; i++){
    console.log(i)
}

var lista = ["carro", "motto", "Bicicleta"]
console.log(lista)

lista.forEach(elemento => {
    if (elemento == "Bicicleta"){
        console.log("tem biscicleta aqui")
    }
});

lista.forEach(elemento => {
    if (elemento == "motto"){
        console.log("tem motto aqui")
    }
});

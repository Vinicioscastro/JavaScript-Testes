class Carro {
    constructor(nome, valor){
        this.nome = nome
        this.valor = valor

    }

    mostrar(){
        console.log(`O ${this.nome} hoje custa em media ${this.valor} em nossa loja`);
    }
}

var carro1 = new Carro

carro1.nome = "creta"
carro1.valor = 95.000,00

console.log(carro1);

carro1.mostrar()

var carro2 = new Carro("hilux", 350.000,00)

carro2.mostrar()

console.log(carro1.mostrar);

var carro5 = new Carro ("Pristam", 45.000,00)
carross = {carro1 , carro2, carro5}

for (chave in carro5){
    console.log(chave + " : " + carro5[chave]);
}

for (chave in carro5){
    console.log(chave + " : " + carro5[chave]);
}

console.log(carross)

for (chave in carross){
    for (chave in carross){
        console.log(chave + ":::" + carross[chave]);
    }
}

for (chave in carross){
    for (chave in carross){
        console.log(chave + ":::" + carross[chave]);
    }
}

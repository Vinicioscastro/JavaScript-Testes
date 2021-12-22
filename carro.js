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

var carro2 = new Carro("hilux", 250.000,00)

carro2.mostrar()



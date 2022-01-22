class Carro {
    constructor(modelo, marca, valor) {
        this.modelo = modelo
        this.marca = marca
        this.valor = valor
    }

    mostrar(params) {
        console.log(`O ${this.modelo} da marca ${this.marca} está avaliando em ${this.valor} Mil reais`);
    }
}

var c1 = new Carro("Hilux", "Toyota", 350)

c1.mostrar()
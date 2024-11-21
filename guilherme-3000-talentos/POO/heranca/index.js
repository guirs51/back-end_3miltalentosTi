// classe pai (base) 'veiculo'
class Veiculo{
    constructor(velocidade){
        this. velocidade = velocidade // a propriedade 'velocidade' é definida no construtor
    }
    // Metodo para  acel
    acelerar(){
        this.velocidade += 18 // aumenta a velocidade 
        console.log("velocidade atual:", this.velocidade, "Km/h")
    }
}

class Carro extends Veiculo {
    constructor(velocidade){
        super(velocidade)// chamando o construtor de class pai "veiculo" para inicializar  "velocidade"
    }
    // Metodo especifico de "carro" para buzinar 
    buzinar(){
        console.log("Buzinado!")
    }
}

// criando uma instancia de carro com velocidade inicial 60 Km/h
const carro = new Carro(60)
carro.acelerar()
carro.buzinar()
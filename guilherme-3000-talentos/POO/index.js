/*
class Carro {
    //O 'constructor' é um método especial usado para inicializar os atributos 
    constructor(marca, modelo, cor) {
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }

    // Metodo para ligar o carro 
    ligar() {
        console.log("o carro esta ligado");
    }

    // Metodo para exibir as informações do carro 
    exibirInfromacoes() {
        // usa "this" para acessar os atributos do objeto atual 
        return `${this.marca} ${this.modelo}, cor: ${this.cor}`
    }
}

class Cachorro {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    latir() {
        return `Au Au`
    }

    aniversario(meuCachorro) {
        meuCachorro.idade += 1

        return meuCachorro
    }
}

let brancaDeneve = new Cachorro("branquinha", 3)

console.log(brancaDeneve.latir())

console.log(brancaDeneve)

console.log(brancaDeneve.aniversario(brancaDeneve))

console.log(brancaDeneve.idade)
*/

// exercicio 2 

class Lampada {
    constructor(estado, cor){
        this.estado = estado
        this.cor = cor
    }

    ligar(){
      if(this.estado === "ligado"){
        return `a lampada ja estava ligada`
      }else if(this.estado === "desligado"){
        this.estado = "ligado"
        return `a lampada esta ligada`
      }
    }

    desligar(){
        if(this.estado === "desligado"){
            return `a lampada ja estava desligada`
        }else if(this.estado === "ligado"){
            this.estado = "desligado"
            return `a lampada esta desligada`
        }
    }
}

const minhaLapada = new Lampada("ligado" , "azul")

console.log(minhaLapada.ligar())
console.log(minhaLapada.desligar())
console.log(minhaLapada.desligar())
console.log(minhaLapada.ligar())
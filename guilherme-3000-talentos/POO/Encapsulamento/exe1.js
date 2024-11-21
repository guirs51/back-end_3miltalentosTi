class Pessoa {
    #nome 
    #idade 
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    
    obterNome() {
        return `O nome é ${this.#nome}`
    }

    obterIdade() {
        this.#idade = this.idade
        return `a idade é ${this.#idade}`
    }


    definirIdade(novaIdade) {
        if (novaIdade > 0) {
            this.#idade = novaIdade
            console.log(this.#idade)
        }else if(novaIdade <=  0){
            return `Erro: A idade tem um numero invalido`
        }
    }
}

const novaPessoa = new Pessoa("guilherme" ,17)
console.log(novaPessoa.obterIdade())
console.log(novaPessoa.obterNome())
console.log(novaPessoa.definirIdade(0))
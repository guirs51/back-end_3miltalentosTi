class Conta {
    #saldo = 300 // propriedade privada

    constructor(nome){
        this.nome = nome 
    }
    // Metodo público para adiconar ao saldo
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor 
            return `Deposito de R$ ${valor} realizado`
        }
        return `valor invalido para depósito.`
    }
    // Metodo publico para acessar o saldo 
    obterSaldo(){
        return `O saldo  é R$ ${this.#saldo}. `
    }
}
const conta = new Conta("kaike")
conta.depositar(100)
console.log(conta.obterSaldo())

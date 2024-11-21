class Bebidas {
 constructor(nome, volume){
    this.nome = nome 
    this.volume = volume
 }

 descricao(){
    console.log(`Bebidas: ${this.nome}, Volume: ${this.volume} `)
 }
}
//Subclass
class Suco extends Bebidas {
    constructor(nome, volume, frutas, procentagemPolpa){
        super(nome, volume)
        this.frutas = frutas  
        this.procentagemPolpa = procentagemPolpa
    }
    
    descricao(){
          console.log( `suco: ${this.nome}, Volume: ${this.volume}, fruta: ${this.frutas}, polpa: ${this.procentagemPolpa}`)
    }
}

const Suco1 = new Suco("Maratá," , "300ml" , "feito de laranja" , 30 )
const Suco2 = new Suco("CBS", "300ml" , "feito de morango" , 35 )
const Suco3 = new Suco("CBS", "300ml" , "feito de morango" , 35 )

function escolhaDeCassiano(listaDeSuco){
    listaDeSuco.forEach(Suco => Suco.descricao())
}


const sucos = [Suco1, Suco2, Suco3]
escolhaDeCassiano(sucos)


class FoneDeOuvido {
   constructor(marca, modelo){
    this.marca = marca 
    this.modelo = modelo 
   }

   informacao(){
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
   }
}

class NovoFoneDeOuvido extends FoneDeOuvido{
    constructor(marca, modelo, tipoDeConexao){
        super(marca, modelo)
        this.tipoDeConexao = tipoDeConexao
    }

    informacao(){
        console.log(`Tipo de conexão: ${this.tipoDeConexao}`)
       }
}
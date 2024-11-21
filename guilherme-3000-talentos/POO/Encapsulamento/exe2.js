/*class PoteDeVitamina {
    #vitaminas 
constructor(vitaminas){
    this.#vitaminas = vitaminas 
}

    abrir(){
        console.log( ` A vitamina ${this.#vitaminas[2]} foi retirada`)
       this.#vitaminas.pop(this.#vitaminas)
       console.log(this.#vitaminas)
    }
}

const minhasVitaminas = new PoteDeVitamina(["VitaminaC", "VitaminaD" , "VitaminaB12"])
minhasVitaminas.abrir()*/

class PoteDeVitamina {
    #vitaminas
    constructor(){
        this.#vitaminas = [ ]
    }
}
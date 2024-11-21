// matrix de inventario 
let inventario = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
]


function adicionarItem(item) {
    //para dar  um informação de os items são colocados no inventario
    alert("o inventario vai de 0.0 ate 4.0")
    // varivel para armazenar a linha que vai ser guardada o item
    let pergunta1 = String(prompt(`esolha a linha que voce quer colocar ${item}`,))
    // variavvel para armazenar a  coluna que vai ser guardada o item
    let pergunta2 = String(prompt(`escolha a coluna que voce quer colocar ${item}`,))
    //condiçonal que verefica se o local escolhido é zero(zero é vazio). usando as variavels acima 
    if (inventario[pergunta1][pergunta2] === 0) {
        //se o local escolhido for zero(vazio) ele coloca o item(parametro)
        inventario[pergunta1][pergunta2] = item
        //imprimi no console que o personagem escolhido pelo usuario pegou o item
        console.log(`${meuPersonagem.nome} pegou  a `, item)
        // condiçonal que verefica se o local escolhido tem uma string(ocupado)
    } else if (inventario[pergunta1][pergunta2] === `String`) {
        //imprimi no console que o local escolhido esta ocupado
        console.log("lugar ocupado")
        //variavel que  vai receber o valor 1, caso o usuario queira trocar o item que esta ocupando o local escolhido pelo item que quer guardar 
        const trocarItem = Number(prompt(`este lugar esta ocupado. digite um 1 se quiser colocar subtituir. digite qualquer outra tecla para para não subtituir `))
        //condiçonal que verifa se a variavel de troca recebiu o valor 1(valor para trocar itens)
        if (trocarItem === 1) {
            //troca o item ques esta no local por outro que o usuario queira guarda
            inventario[pergunta1][pergunta2] = item
        }
    }
}

//arrays de itens
const itens = [ // os itens são objetos pois possuim um nome e um efeito(exeto pela chave que possui só nome)
    { nome: "chave" },
    { nome: "erva medicinal", efeito: 10 },
    { nome: "explosivo", efeito: 30 }
]
// variavel(string) que tem o valor chave
const chave = "chave"
// variavel(number ) que tem o valor 0
let celeiro1 = 0
//função para usar a chave 
function usarChave(inventario, item) {
    //loop para perconher a linha do inventario(a matrix)
    for (let i = 0; i < inventario.length; i++) {
        //loop para perconher a coluna do inventario(a matrix)
        for (let j = 0; j < inventario[i].length; j++) {
            //condiçonal que verifica se o usuario tem o item(chave) no invetario
            if (inventario[i][j] === item) {
                //mensagem de aviso
                alert("voce pode usar a chave")
                //mensagem de aviso
                alert(`${meuPersonagem.nome} usou a chave`)
                //tira a chave do inventario
                inventario[i].splice(j, 1, 0)
                //troca o valor da vaivel da linha 47 por 1
                celeiro1 = 1
                // verifica se o usuario não tem a chave  
            } else if (inventario[i][j] !== item) {
                //mensagem de aviso 
                alert(`local trancado.${meuPersonagem.nome} Precisa da chave `)
            }
        }
    }
}
//variavel(string) que tem o valor de erva medicinal
const ervaM = "erva medicinal"
//função para validar a vida do usuario 
function validarVIda() {
    //condiçonal que verifica se a vida do personagem do usuario é mais de 90
    if (meuPersonagem.vida > 90) {
        //muda a vida(atributo) do persoagem pelo limite maximo de vida(atributo)
        meuPersonagem.vida = meuPersonagem.limiteMaxDeVida
    }
}
//função para  curar a vida do personagem do usuario 
function usarCura(inventari, item) {
    //loop que perconhe a linha do inventario(matrix)
    for (let i = 0; i < inventario.length; i++) {
        //loop que perconhe a coluna do inventario(matrix)
        for (let j = 0; j < inventario[i].length; j++) {
            // condiçonal que verifica se o jogado tem o item(a cura) no inventario
            if (inventari[i][j] === item) {
                //condiçonal que verifica se o jogoador tem menos de 90 de vida
                if (meuPersonagem.vida < 90) {
                    //retira o item(item de cura) no inventario
                    inventario[i].splice(j, 1, 0)
                    //adiciona o valor do efeito do objeto erva medicinal no personagem
                    meuPersonagem.vida += itens[1].efeito
                }
            }
        }
    }
}
//array de inimigos 
let inimigos = [
    { nome: "zumbi", vida: 15, dano: 5 },
    { nome: "mutante", vida: 40, dano: 15 },
    { nome: "silvo santos(boss)", vida: 150, dano: 40 }
]
//array de personagens
let personagem = [
    { nome: "Leon S. Kennedy", vida: 90, limiteMaxDeVida: 90, arma: [{ nome: "escopeta", dano: 15, alcance: 10, durabilidade: 5 }, { nome: "pistola", dano: 5, alcance: 20, durabilidade: 10 }] },
    { nome: "Jake Muller", vida: 90, limiteMaxDeVida: 90, arma: [{ nome: "Nine-oh-Nine", dano: 15, alcance: 10, durabilidade: 5 }, { nome: "G22", dano: 5, alcance: 20, durabilidade: 10 }] }
]
// variavel(number) que tem o valor 0
let number = 0;
//função para o jogador escolher o personagem que ele vai jogar 
function escolhaUmPersonagem() {
    //variavel que recebe um valor(number) 
    const escolha = Number(prompt(`escolha um personagem. digite 1 para escolher ${personagem[0].nome}. E digite 2 para escolher ${personagem[1].nome}`))
    //condiçonal que verifica se a variavel da linha 117 tem o valor 1 
    if (escolha === 1) {
        // trocar o valor da variavel da linha 113 pelo valor da variavel da linha 117
        number = escolha
        //returna uma mensagem
        return `voce escolheu ${personagem[0].nome}`
        //condiçonal que verifica se a varaivel da linha 117 tem o valor 2   
    } else if (escolha === 2) {
        // trocar o valor da variavel da linha 113 pelo valor da variavel da linha 117
        number = escolha
        //returna uma mensagem
        return `voce escolheu ${personagem[1].nome}`
        // condiçonal para returnar uma mensagem se o valor da variavel de linha 117 não for 1 ou 2  
    } else {
        return `Erro: Renicie o programa e digite 1 ou 2 para selecionar um personagem`
    }

}

//mensagem 
const iniciarJogo = alert("jogo iniciando")
//chama a função 
escolhaUmPersonagem()
//variavel que recebe o valor da varivavel da linnha 113
let meuPersonagem = number
//condiconal que verifica se o valor da variavel da linha 142 é 1
if (meuPersonagem === 1) {
    //troca o valor da variavel da linha 142 pelo um objeto dentro de uma array(array de personagem) na posição zero
    meuPersonagem = personagem[0]
    //condiconal que verifica se o valor da variavel da linha 142 é 2
} else if (meuPersonagem === 2) {
    //troca o valor da variavel da linha 142 pelo um objeto dentro de uma array(array de personagem) na posição 1
    meuPersonagem = personagem[1]
    // condiçonal para returnar uma mensagem se o valor da variavel de linha 142 não for 1 ou 2  
} else {
    console.log(`Erro: Aconteceu um erro na seleção de personagem. Renicie o programa e tente novamente`)
}
//mensagem
alert(`${meuPersonagem.nome} recebeu uma missão de procurar um pessoa. `)
//mensagem
alert(`${meuPersonagem.nome} foi largado em uma floresta.`)
//variavel que vai receber um valor pelo jogador 
const doisCaminho = Number(prompt(`${meuPersonagem.nome} achou dois caminho. um tem uma casa, e o outro é uma trilha na floresta, vazio aparente mente. Voce quer ir pelo 1 caminho ou pelo 2 caminho? `))
//verifica  se o valor da variavel da linha 160 é 1
if (doisCaminho === 1) {
    //variavel que recebi um valor pelo jogador
    const aChave = Number(prompt(`${meuPersonagem.nome} entrou na casa e achou uma chave. Voce quer pegar a chave e guarda no inventario? digite 1 para pegar a chave`))
    // condiçonal que verifica se o valor da variavel da linha 164 é 1
    if (aChave === 1) {
        //chama uma função que tem um parametro 
        adicionarItem("chave")
        //imprime no console o inventario(matrix)
        console.log(inventario)
    }
    //condiçonal que verifaca se o valor da variavel da linha 160 é  2
} else if (doisCaminho === 2) {
    //variavel que vai receber um valor do jogador
    const passadoPelaTrilha = Number(prompt(`${meuPersonagem.nome} achou um ${inimigos[0].nome} no meio da trilha. Voce quer atacar ele direto ou tentar passar pelo lado despercebido? Digite 1 para primeira opção e 2 para segunda opção.`))
    //condiçonal que verifica se a variavel da linha 175 tem o valor 1
    if (passadoPelaTrilha === 1) {
        //variavel que vai receber um valor do jogador 
        const escolherArma = prompt(`Com qual arma voce deseja atacar, ${meuPersonagem.arma[0].nome}, ou ${meuPersonagem.arma[1].nome}? Digite 0 para primeira opição e 1 para segundo opição`)
        //diminiu a vida do inimigo pela arma escolhida pelo usuario
        inimigos[0].vida -= meuPersonagem.arma[Number(escolherArma)].dano
        //diminiu a durabilida da arma escolhida pelo jogador(usada)
        meuPersonagem.arma[escolherArma].durabilidade -= 1
        //condiconal que que verica a vida do inimigo
        if (inimigos[0].vida > 0) {
            //mensagem
            alert(`O ${inimigos[0].nome} não morreu. ele esta indo para cima de voce`)
            //variavle que vai receber um valor do jogador 
            const matarOuMorrer = Number(prompt(`O ${inimigos[0].nome} esta corredo atras de atras de voce. Voce pode tentar matar ele com mesma arma  ou correr. Digite 1 para primeira opção ou 2 para segunda opção `))
            //condiçonal verefica se o valor da  variavel na linha 189 é 1 
            if (matarOuMorrer === 1) {
                //diminui a vida do inimigo pelo a arma esolhida pelo personagem
                inimigos[0].vida -= meuPersonagem.arma[escolherArma].dano
                //imprimi o o nome do personagem do jogaodor  e o nome do inimigo
                console.log(`${meuPersonagem.nome} matou ${inimigos[0].nome}`)
                //diminiu a durabilidade da arma escolhida pelo jogador 
                meuPersonagem.arma[escolherArma].durabilidade -= 1
                //condiçonal que verifa se a variavel da linha 189
            } else if (matarOuMorrer === 2) {
                //diminui a vida do persoangem pelo dano do inimigo 
                meuPersonagem.vidam -= inimigos[0].dano
                //imprimi o nome do inimigo duas vezes e o nome do personagem do jogador 
                console.log(`${inimigos[0].nome} alcançou e arranhou voce. ${meuPersonagem.nome} conseguiu matar ${inimigos[0].nome}, mas sofreu dano `)
                //imrprimi o nome, a vida e o limite maximo de vida do personagem
                console.log(`A vida de ${meuPersonagem.nome} é ${meuPersonagem.vida -= inimigos[0].dano} de ${meuPersonagem.limiteMaxDeVida}`)
                //diminui a vida do personagem pelo dano do inimigo
                meuPersonagem.vida -= inimigos[0].dano
                //diminui a a durabilida da arma escolhida pelo por 1
                meuPersonagem.arma[escolherArma].durabilidade -= 1
            }
            //condiçonal que verifica a vida do inimigo
        } else if (inimigos[0].vida <= 0) {
            //imprimi o nome do personagem e do inimigo
            console.log(`${meuPersonagem.nome} matou o ${inimigos[0].nome}`)
            //condiconal que verifica a vida do inimigo
        }
    }
}
//condiconal que verifica se a o valor da variavel da linha 160 e 1
if (doisCaminho === 1) {
    //mensagem
    alert(`${meuPersonagem.nome} viu uma escada que leva para o segundo andar da casa`)
    //variavel que vai receber um valor do jogador
    const subirOuSair = Number(prompt("Digite 1 para subir as escadas e ir para o segundo andar, Ou digite 2 para sair da casa"))
    //condiçonal que vai verificar se a variavel da linha 224 é 1
    if (subirOuSair === 1) {
        //mensagem 
        alert(`${meuPersonagem.nome} foi para o segundo andar `)
        //mensagem
        alert(` Um ${inimigos[1].nome} apareceu de repente  e acerta ${meuPersonagem.nome} causando ${inimigos[1].dano} de dano`)
        //diminui a vida do personagem do jogaodr pelo dano do inimigo
        meuPersonagem.vida -= inimigos[1].dano
        //imprimi  o nome e a vida do personagem do jogador 
        console.log(`${meuPersonagem.nome} tem ${meuPersonagem.vida} de vida `)
        //mensagem
        alert(`${meuPersonagem.nome} afasta o ${inimigos[1].nome} e da um tiro nele com a ${meuPersonagem.arma[0].nome} causando ${meuPersonagem.arma[0].dano} de dano`)
        // diminui a vida do inimigo 1 pela armado do jogador na posição do jogador
        inimigos[1].vida -= meuPersonagem.arma[0].dano
        //diminui a durabilida da arma do jogador que esta na posição 0
        meuPersonagem.arma[0].durabilidade -= 1
        //variavel que vai receber um valor do jogador 
        const mutante = Number(prompt(`o ${inimigos[1].nome} esta avançando em ${meuPersonagem.nome}. Voce quer atirar  ele com a ${meuPersonagem.arma[0].nome} denovo. Ou Voce quer correr? digite 1 para primeira opção e 2 para segunda opção `))
        //condiçonal que verefica se o valor da variavle da linha 242 é 1
        if (mutante === 1) {
            //mensagem
            alert(`${meuPersonagem.nome} deu dois tiro nele com ${meuPersonagem.arma[0].nome}`)
            // diminui a vida do inimido 1 pelo o dobro do dano da arma do jogador que esta na posiçao
            inimigos[1].vida -= meuPersonagem.arma[0].dano * 2
            // diminui a durabilida da arma do jogaodr que esta na posiçao 0 por 2
            meuPersonagem.arma[0].durabilidade -= 2
            //condiçonal que verifica se a vida no inimigo é meno que ou igual a zero
            if (inimigos[1].vida <= 0) {
                //mensagem
                alert(`${meuPersonagem.nome} matou ${inimigos[1].nome}`)
                //mensagem 
                alert(`${meuPersonagem.nome} sai da casa e vai para a trilha`)
            }
            //condiçonal que verifica se o valor da variavel da linha 242 é 2 
        } else if (mutante === 2) {
            //mensagem
            alert(`${meuPersonagem.nome} corre para fora da casa, e tranca o ${inimigos[1].nome} dentro da  casa. Mas sofre ${inimigos[1].dano} de dano  do ${inimigos[1].nome} `)
            //diminnui a vido do personagem pelo dano do inimigo 0
            meuPersonagem.vida -= inimigos[1].dano
            //imprimi o personagem do jogador
            console.log(meuPersonagem)
        }
        //condiçonal que verifica se o valor da variavel da linha   224 é 2
    } else if (subirOuSair === 2) {
        //mensagem
        alert(`${meuPersonagem.nome} saiu da casa`)
    }
}
//condiçonal que verifica se a variavel da linha 260 é 1
if (doisCaminho === 1) {
    const passadoPelaTrilha = Number(prompt(`${meuPersonagem.nome} volta pelo caminho que venho e vai em direção a trilha.  seguindo a trilha, ${meuPersonagem.nome} acha um ${inimigos[0].nome}. Voce quer atacar ele direto ou tentar passar pelo lado despercebido? Digite 1 para primeira opção e 2 para segunda opção.`))
    //condiçonal que verifica se a variavel da linha 175 tem o valor 1
    if (passadoPelaTrilha === 1) {
        //variavel que vai receber um valor do jogador 
        const escolherArma = prompt(`Com qual arma voce deseja atacar, ${meuPersonagem.arma[0].nome}, ou ${meuPersonagem.arma[1].nome}? Digite 0 para primeira opição e 1 para segundo opição`)
        //diminiu a vida do inimigo pela arma escolhida pelo usuario
        inimigos[0].vida -= meuPersonagem.arma[Number(escolherArma)].dano
        //diminiu a durabilida da arma escolhida pelo jogador(usada)
        meuPersonagem.arma[escolherArma].durabilidade -= 1
        //condiconal que que verica a vida do inimigo
        if (inimigos[0].vida > 0) {
            //mensagem
            alert(`O ${inimigos[0].nome} não morreu. ele esta indo para cima de voce`)
            //variavle que vai receber um valor do jogador 
            const matarOuMorrer = Number(prompt(`O ${inimigos[0].nome} esta corredo atras de atras de voce. Voce pode tentar matar ele com mesma arma  ou correr. Digite 1 para primeira opção ou 2 para segunda opção `))
            //condiçonal verefica se o valor da  variavel na linha 189 é 1 
            if (matarOuMorrer === 1) {
                //diminui a vida do inimigo pelo a arma esolhida pelo personagem
                inimigos[0].vida -= meuPersonagem.arma[escolherArma].dano
                //imprimi o o nome do personagem do jogaodor  e o nome do inimigo
                console.log(`${meuPersonagem.nome} matou ${inimigos[0].nome}`)
                //diminiu a durabilidade da arma escolhida pelo jogador 
                meuPersonagem.arma[escolherArma].durabilidade -= 1
                //condiçonal que verifa se a variavel da linha 189
            } else if (matarOuMorrer === 2) {
                //diminui a vida do persoangem pelo dano do inimigo 
                meuPersonagem.vidam -= inimigos[0].dano
                //imprimi o nome do inimigo duas vezes e o nome do personagem do jogador 
                console.log(`${inimigos[0].nome} alcançou e arranhou voce. ${meuPersonagem.nome} conseguiu matar ${inimigos[0].nome}, mas sofreu dano `)
                //imrprimi o nome, a vida e o limite maximo de vida do personagem
                console.log(`A vida de ${meuPersonagem.nome} é ${meuPersonagem.vida -= inimigos[0].dano} de ${meuPersonagem.limiteMaxDeVida}`)
                //diminui a vida do personagem pelo dano do inimigo
                meuPersonagem.vida -= inimigos[0].dano
                //diminui a a durabilida da arma escolhida pelo por 1
                meuPersonagem.arma[escolherArma].durabilidade -= 1
            }
            //condiçonal que verifica a vida do inimigo
        } else if (inimigos[0].vida <= 0) {
            //imprimi o nome do personagem e do inimigo
            console.log(`${meuPersonagem.nome} matou o ${inimigos[0].nome}`)
            //condiconal que verifica a vida do inimigo
        }
    }
}
//imrprimi o personagem do jogador
console.log(meuPersonagem)

//mensagem
alert(`${meuPersonagem.nome} continou a caminhar pela trilha, e achou uma cabana`)
//variavel que vai receber um valor do jogaodr
const cabana = Number(prompt(`Digite 1 para entrar na cabana. Ou qualaquer tecla para ignorar`))
//condiçonal que verifica se o valor da variavel da linha 325 é 1
if (cabana === 1) {
    //mensagem
    alert(`${meuPersonagem.nome} entrou na cabana`)
    //variavel que vai receber um valor do jogador
    const item1 = Number(prompt(` ${meuPersonagem.nome} achou 2 erva medicinal. Digite 1 se qusier quarda no inventario, ou qualquer tecla para ignorar`))
    //condiçonal que vai verificar se o valor da variavel da linha 331 é 1
    if (item1 === 1)
        //camando uma função 
        adicionarItem("erva medicinal")
    //chamando uma função
    adicionarItem("erva medicinal")
    //imrprimi o inventario
    console.log(inventario)
}
//variavel que vai recebr um valor do jogador 
const item2 = Number(prompt(`${meuPersonagem.nome} achou uma caixa. Digite 1 para abrir a caixa. Ou digite qualquer tecla para ignorar`))
//condiçonal que vai verificar se o valor da vairavel da linha 342 é 1
if (item2 === 1) {
    //variavel que vai receber um valor do jogador
    const caixaDaSorte = Number(prompt(`${meuPersonagem.nome} abriu a caixa e achou 4 ervas medicinais,  4 explosivos. Digite 1 para guarda no inventario, ou digite qualquer tecla para ignora `))
    //condiçonal que vai verifacar se o valor da variavel na linha 346 
    if (caixaDaSorte === 1) {
        //chamando a função
        adicionarItem("erva medicinal")
        //chamando a função
        adicionarItem("erva medicinal")
        //chamando a função
        adicionarItem("erva medicinal")
        //chamando a função
        adicionarItem("erva medicinal")
        //chamando a função
        adicionarItem("explossivo")
        //chamando a função
        adicionarItem("explossivo")
        //chamando a função
        adicionarItem("explossivo")
        //chamando a função
        adicionarItem("explossivo")
        //mensagem
        alert(`${meuPersonagem.nome} pegas os itens e sai da cabana`)

    }
}
//variavel que vai receber um valor do jogador
const curar = Number(prompt("voce quer usar cura? digite 1 para usar "))
//condiçonla que vai verificar se a variavel da linha 371 é 1
if (curar === 1) {
    //chamando a função
    usarCura(inventario, "erva medicinal")
    //chamando a função
    validarVIda()
    //imprimi o persoangem do jogador
    console.log(meuPersonagem)
    //imprimi o inventario
    console.log(inventario)
}
//mensagem
alert(`${meuPersonagem.nome} continua seguindo a trilha `)
//mensagem
alert(`${meuPersonagem.nome} chega no final da trilha e encontra um celeiro. ${meuPersonagem.nome} se aproxima do celeiro`)
//variavel que vai rebecer um valor do jogador
const oCeleiro = Number(prompt(`o celeiro esta fechado. voce quer tentar abrir? digite 1 para abrir ou qualquer outra tecla para ignorar`))
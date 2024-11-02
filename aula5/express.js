//importando o express
const express =  require('express')
// criando um instancia do aplicativo express
const app = express()
//definindo um rota para o endpoint raiz ('/')
//quando uma solicitação GET é feita para ('/') essa função é executada 
app. get('/' ,function(request, response){
    // returna uma resposta no formato JSON com uma mensagem de boa de vindas
    return response.json({
        message: 'ola turma 5938!'
    })
})

//definindo um rota para  o endpoint projects ('/' )
// qunado uma solicitação GET é feita '/', a função a seguir é executada 
app.get('/projects', function(request, response){
    return response.json([
        'Projeto 1',
        'Projeto2'
    ])
})
//definindo uma rota para criar um novo projeto
//quando uma solicitação do tipo POST é feita para '/projetos'.
app.post('/projects', function(request, response){
    //retornar uma resposta com uma lista de projetos incluindo o novo projeto
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})
// definindo uma rota para atualizar um projeto especifico
// o 'id' é um parametro de rota 
app.put('/projects/:id', function(request, response){
    // returna um resposta JSON coma lista de projetos atualizida
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})
// definindo uma rota para deletar um projeto especifico
app.delete('/projects/:id', function(request, response){
    //retorna uma resposta com a lista de projetos após uma exclusao de um deles 
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})
//iniciando o servidor na porta 9093 (para orientar no terminal que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(9093 , () => {
    console.log("servidor rodando na prota 9093")
})
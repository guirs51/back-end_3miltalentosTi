/*Como a gente vai criar uma api Que se comunica* atreaves dos metodos http, nós importamos o nosso http (pacote que vem node | nativa )*/
const http = require('http')
/*criando  um  servidor que vai receber uma requisição e dar uma resposta então iniciamos um arrow function */
http.createServer((resquest, response) => {
  /* aqui vamos colocar a port que vais escutar e tambem é onde ele vai respoder, |response.end() finalizar, (não tem mais nada a fazer)| */
  response.write('hello wolrd')
  response.end()
}).listen(9090)


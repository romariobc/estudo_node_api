// server.js ou seja, nosso servidor node ou ambiente de desenvolvimento js no lado do servidor

// Neste arquivo importamos o arquivo app.js, que contém a configuração do servidor Express e as rotas da API.
import app from './src/app.js'

// Após criar o server.js, definimos a porta em que o servidor irá ouvir as requisições. Neste caso, está definida a porta 3000.
const PORT = 3000;

// Então criamos o metodo para iniciar o servidor Express na porta definida e exibir uma mensagem no console quando o servidor estiver rodando.
app.listen(PORT, () => {
console.log(`Servidor rodando na porta http://www.localhost:${PORT}`);
});


// Como forma de melhorar a legigilidade optamos por definir nossa const em caixa alta para indicar uma ''variável'' que não sofre alteração.
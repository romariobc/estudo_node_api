
import express from 'express';
const app =  express()

// indicar para o express ler body com json
app.use(express.json())

// mockar dados. estrutura basica de dados para testes

const selecoes = [
    {id: 1, selecao: 'Brasil', Grupo: 'G' },
    {id: 2, selecao: 'Suiça', Grupo: 'G' },
    {id: 3, selecao: 'Camarões', Grupo: 'G' },
    {id: 4, selecao: 'Sérvia', Grupo: 'G' },
]

// função auxiliar para buscar seleção por id

function buscarSelecaoPorId (id){
    return selecoes.filter(selecao => selecao.id == id)
}
// pegar a posição do elemento no array por id
function buscaIndexSelecao (id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

// rota raiz
app.get('/', (rep, res)=>{
    res.send('Enfim deu certo')

})

app.post('/selecoes', (req, res)=> {
    selecoes.push(req.body)
    res. status(201).send('Seleção cadastrada com sucesso')

})

// rota 2
app.get('/selecoes', (req, res)=>{
    res.status(200).send(selecoes)
    
})

app.get('/selecoes/:id', (req, res) => {
    res.json (buscarSelecaoPorId(req.params.id))
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].Grupo = req.body.grupo
    res.json(selecoes)

})


app.delete('/selecoes/:id', (req, res) => {
   let index = buscaIndexSelecao(req.params.id)
   selecoes.splice(index, 1)
   res.send('Seleção excluída com sucesso')

})







export default app







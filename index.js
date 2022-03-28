const express = require('express'); // Importa o módulo express para esse arquivo
const req= require("express/lib/request");
const path = require("path"); //Para adicionar estilos com CSS, imagens, vídeos, áudios, entre outros arquivos estáticos, nós precisamos importar uma lib do próprio Express chamada path
const app = express(); // Instancia uma referência do express no projeto

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"public"))); //Ainda no index.js, nós precisamos dizer para o Express a pasta que irá guardar esses arquivos
app.use(express.urlencoded());
app.set("view engine","ejs");

const pokedex = [
  {

  id:1,
  nome: "Picachu",
  descricao: "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
  tipo: "Eletrico",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  altura:0.4,
  peso:6.0,
  categoria:"Mouse",
  habilidade:"Estático"
  },

{

  id:2,
  nome: "Charmander",
  descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
  tipo: "Incêndio",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  altura:0.6,
  peso:8.5,
  categoria:"Lagarto",
  habilidade:"Chama"
  },
  {
  id:3,
  nome: "Vileplume",
  descricao: "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem nuvens pesadas de pólen tóxico",
  tipo: "Grama, Veneno",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
  altura:1.2,
  peso:18.6,
  categoria:"Flor",
  habilidade:"Clorofila"
  }
]


// Rota principal que recebe uma função de callback que recebe dois parametros: 
// req de requisição
// res de resposta

app.get('/',  (req, res) => {
  res.render('index', {pokedex})
});
// GET method route
app.get('/cadastro',  (req, res) => {
  res.render('cadastro') // Nome do arquivo, o EJS já busca dentro da pasta views.
});
// POST method route
app.post('/add',  (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length+1;
    pokedex.push(pokemon);
    res.redirect('/');
});

app.get('/detalhes/:id',  (req, res) => {
  const id = +req.params.id - 1;
  const pokemon = pokedex[id];
  res.render('detalhes', {pokemon});  
});

app.get('/detalhes',  (req, res) => {
  res.redirect('/');
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen ( port, ( )=>
  console.log(`Servidor rodando em http://localhost: ${port}`)
);
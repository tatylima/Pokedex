const express = require('express');
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());
app.set("view engine", "ejs");

const pokedex = [
  {

  id:1,
  nome: "Picachu",
  descricao: "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
  tipo: "Eletrico",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  Altura:0.4,
  Peso:6.0,
  Categoria:"Mouse",
  Habilidade:"Estático"
  },

{

  id:2,
  nome: "Charmander",
  descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
  tipo: "Incêndio",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  Altura:0.6,
  Peso:8.5,
  Categoria:"Lagarto",
  Habilidade:"Chama"
  },
  {
  id:3,
  nome: "Vileplume",
  descricao: "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem nuvens pesadas de pólen tóxico",
  tipo: "Grama, Veneno",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
  Altura:1.2,
  Peso:18.6,
  Categoria:"Flor",
  Habilidade:"Clorofila"
  }
]



app.get('/home',  (req, res) => {
  res.render('index', {pokedex})
});
app.get('/cadastro',  (req, res) => {
  res.render('cadastro')
});
app.get('/detalhes',  (req, res) => {
  res.render('detalhes')
});
app.post('/adicionar',  (req, res) => {
  res.send('Olá mundo')
});


app.listen(3000 , () => console.log("Servidor rodando em http://localhost:3000/home"));
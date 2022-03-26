const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());
app.set("view engine", "ejs");




function funcao1(){
    var x;
    var r= confirm("Deseja cadastrar mais um!");
    if(r===true){
        x="Você pressionou ok!";

    }else{
        x="Você pressionou cancelar!";
    }
    document.getElementById("demo").innerHTML=x;
}
app.get('/cadastro',  (req, res) => {
    res.render('cadastro')
});
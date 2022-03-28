const btCadastrar = document.getElementById("#btCadastrar"); 
const btPokedex = document.getElementById("#btPokedex"); 
const btcard = document.getElementById("#btCard") ;

    btCadastrar.addEventListener("click", () => { 
        alert("Pokémon cadastrado com sucesso!");
    });
        btPokedex.addEventListener("click", () => { 
            alert("Você será redirecionado para outro site!");
            window.open("https://www.pokemon.com/br/pokedex/");
        });
            btcard.addEventListener("mouseover", () => { 
                const text = document.createTextNode("Click para ver detalhes!");
                text.style.color = "red";

            });   
                
            
                  
        


 

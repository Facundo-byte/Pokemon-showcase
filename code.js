const texto = document.getElementById("texto");
const boton = document.getElementById("boton")
const imagen = document.getElementById("imagen");

boton.addEventListener("click", function(){
    fetchDatos();
})

async function fetchDatos(){

    try{
        const nombrepokemon = texto.value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrepokemon}`);

        if(!response.ok){
            throw new Error("Pokemon no encontrado");
        }

        const data = await response.json();
        imagen.src = data.sprites.front_default;
        imagen.style.display = "block";
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
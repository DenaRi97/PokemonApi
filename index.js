//Llamando al DOM
const pokeContainer = document.querySelector(".pokemon-container")
//Funcion para buscar objeto concreto en el json
function fetchPoke(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
     .then(res => res.json())
     .then(data => {
        createPoke(data)
     })
}

fetchPoke(1) //Pintar en consola objeto que he buscado

//Función que va a buscar los objetos en el json
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) { //Bucle usando funcion singular anterior
        fetchPoke(i)
    }
}

//Funcion para representar los ojbjetos del json
function createPoke(pokemon) {
    // Constante que va a crear lista en tarjetas de los elementos a llamar y las va acolocar en divs
    const card = document.createElement('div')
    card.classList.add('pokemon-block')
    //Dentro de las tarjetas, crea un div por cada elemento de img, en lista
    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')
    //Busca en el json: 1-pokemon, 2-ensprites y 3-selecciona el sprite (propiedad del json) que queremos en especifico de todas las opciones que hay
    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default 

    spriteContainer.appendChild(sprite) //Fondo del container del sprite

    //Ahora los numeros, que vamos a llamar directamente del json usando ids
    const number = document.createElement('p')
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`  //El $busca llamar los numeros por id(propiedad del json), "toString" hace que se pase a una cadena de texto, "padStart" lo que hace es especificar como es el contador[rellenar el principio de una cadena con un conjunto específico de caracteres hasta alcanzar una longitud determinada. sintax es padStart(longitud, relleno)], en este caso, de 3 digitos max, y con un 0 al principo

    //Similar al de los numeros, uno para los nombres, usando los nombres de las propiedades del json
    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = pokemon.name

    //Todod esto que hemos creado lo vamos a añadir como uno a la tarjeta, en orden
    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)

    //Y luego añadirlo todo al contenedor principal del principio, el que llama al DOM
    pokeContainer.appendChild(card)

}

fetchPokemons(9)













//Crea constante del dato del endpoint que quiero sacar
//Indicar el camino a seguir segun lo pinta en la consola, usando response primero
//Si es un array, ir colocandolos en orden
    // const pokemon = response.results[8]
    // console.log(pokemon

// //Variables para SOBREPASAR LOS LÍMITES
// const info = 'https://pokeapi.co/api/v2/pokemon?' //Api con endpoint
//  var offset = 60 //Set the values as desired
//  var limit = 60 //Add ++ and -- to rotat with buttons

// const infoPokeAll = '${https://pokeapi.co/api/v2/pokemon/}?offset=${offset}&limit=${limit}' //Construir url con las nuevas variables

// fetch(infoPokeAll)
//  .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//     }

//     return response.json()
//  })

//  .then(data => {
//     console.log(data)
//  })

//  .catch(error => {
//     console.error('Error', error)
//  })

const response = await fetch("https://pokeapi.co/api/v2/ditto");
const pokemon = await.response.json();

const imageUrl = pokemon.pikachu.other["official-artwork"];
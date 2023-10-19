import axios from "axios";

function getPokemon(pokemonAffiche, pokemonPerPage){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?offset="+pokemonAffiche+"&limit="+pokemonPerPage)
}

function getPokemonById(id) {
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id+"/")
}

function getPokemonByIdBis(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
}

export default {
    getPokemon,
    getPokemonById,
    getPokemonByIdBis,
};
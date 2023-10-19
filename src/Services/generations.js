import axios from "axios";

function getGeneration(){
    return axios.get("https://pokeapi.co/api/v2/generation/")
}

function getPokemonGeneration(id){
    return axios.get("https://pokeapi.co/api/v2/generation/"+id)
}

export default {
    getGeneration,
    getPokemonGeneration,
}
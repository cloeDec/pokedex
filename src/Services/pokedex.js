import axios from "axios";

function getPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon/")
}

export default {getPokemon};
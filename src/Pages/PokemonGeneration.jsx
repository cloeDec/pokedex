import React, {useState, useEffect} from 'react'; 
import {Link, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Generation from '../Services/generations'
import Pokecards from "../Components/Pokedex";
import PaginationPerso from "../Components/PaginationPerso";




const PokemonGeneration = () => {
    const {generation} = useParams();
    const [currentGeneration, setCurrentGeneration] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(21);
    const [totalPokemon, setTotalPokemon] = useState(0);
    const [maxPage, setMaxPage] = useState(20);

    const fetchPokemonGeneration = async () => {
        try {
            let nombrePokemonAffiche = pokemonPerPage * (currentPage - 1)
            const response = await Generation.getPokemonGeneration((generation), nombrePokemonAffiche, pokemonPerPage)
            setTotalPokemon(response.data.count)
            setMaxPage(Math.ceil((response.data.count / pokemonPerPage)))
            setCurrentGeneration(response.data)
           } catch (e){
            console.log(e)
           }
    }

    useEffect(() => {
        fetchPokemonGeneration()
    }, [currentPage])


    return <>
        <div className={"d-flex flex-wrap gap-2 justify-content-center"}>
        {currentGeneration.pokemon_species != undefined && currentGeneration.pokemon_species.map(g =>{
             return <><Pokecards key={g.name} poke={g}/>
            </>
        })}
        </div>
        <div className={"d-flex justify-content-center"}>
            <PaginationPerso currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
        </div>
        

    </>
}

export default PokemonGeneration;
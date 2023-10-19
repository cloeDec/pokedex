import React, {useEffect, useState} from 'react';
import Pokecards from "../Components/Pokedex";
import Poke from "../Services/pokedex";
import PaginationPerso from "../Components/PaginationPerso";

const HomePage = () => {
    const [pokes, setPokes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(21);
    const [totalPokemon, setTotalPokemon] = useState(0);
    const [maxPage, setMaxPage] = useState(20);

    const fetchPokes = async () => {
        try {
            let nombrePokemonAffiche = pokemonPerPage * (currentPage - 1)
            const response = await Poke.getPokemon(nombrePokemonAffiche, pokemonPerPage);
            setTotalPokemon(response.data.count)
            setMaxPage(Math.ceil((response.data.count / pokemonPerPage)))
            setPokes(response.data.results)
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() =>{
        fetchPokes()
    }, [currentPage]);

     return <>
        <h1>Pokedex</h1>
        <div className={"d-flex flex-wrap gap-2 justify-content-center "}> 
        { pokes.map(poke =>{
            return <Pokecards key={poke.name} poke={poke}/>
        })
            };

    </div>
    <div className={"d-flex justify-content-center"}>
            <PaginationPerso currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
        </div>
    </>
};

export default HomePage;        


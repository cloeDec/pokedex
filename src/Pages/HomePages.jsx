import React, {useEffect, useState} from 'react';
import Pokecards from "../Components/Pokedex";
import Poke from "../Services/pokedex";

const HomePage = () => {
    const [pokes, setPokes] = useState([]);

    const fetchPokes = async () => {
        try {
            const response = await Poke.getPokemon();
            console.log(response)
            setPokes(response.data.results)
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() =>{
        fetchPokes()
    }, []);

    return <>
        { pokes.map(p =>{
            return <Pokecards poke={p}/>
        })
            };
    </>
};

export default HomePage;
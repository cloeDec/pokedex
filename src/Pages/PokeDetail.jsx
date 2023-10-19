import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PokemonTypes from "../Components/PokemonTypes";
import PokemonInfos from "../Components/PokemonInfos";
import PokemonWeekness from "../Components/PokemonWeekness";
import PokemonGraph from "../Components/PokemonGraph";
import Loading from "../Components/Loading";
import pokemonService from "../Services/pokedex";
import Container from 'react-bootstrap/Container'



const PokeDetails = () => {
    const location = useLocation()
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);


    const fetchPokemonById = async () => {
        try {
            const res = await pokemonService.getPokemonByIdBis(location.state.id)
            setPokemon({...location.state, pokemon : res.data})
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemonById()
    }, []);

    return <Container className={"d-flex flex-column"}>
    <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Précédent</Button>
        <Button variant="secondary">Suivant</Button>
    </ButtonGroup>
       {loading == false ? <>
        <h1>{pokemon.names != undefined && pokemon.names[4].name} N°{pokemon.id}</h1>
        <img  width={"300px"} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+pokemon.id+".svg"} />
        <h3>{pokemon.genera != undefined && pokemon.genera[3].genus}</h3>
        <p>{pokemon.egg_groups != undefined && pokemon.egg_groups.map(type => {
            return type.name
        })}</p>
        <p>{pokemon.flavor_text_entries[16].flavor_text}</p>
        <div>
            <PokemonInfos habitat={pokemon.habitat.name} weight={pokemon.pokemon.weight} height={pokemon.pokemon.height} genus={pokemon.genera[3].genus}/>
            <PokemonTypes types={pokemon.pokemon.types}/>
                {pokemon.pokemon.types.map(type => {
                console.log(type)
            return <PokemonWeekness type={type} />
                    })}
            <PokemonGraph stats={pokemon.pokemon.stats}/>
        </div>
        <p>{pokemon.evolution_chain != undefined && pokemon.evolution_chain.url}</p>

    
    </>: <Loading/>}
    </Container>
};

export default PokeDetails;
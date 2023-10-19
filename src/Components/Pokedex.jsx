import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import '../Styles/pokemonCard.css'
import Poke from "../Services/pokedex";
import Loading from "./Loading";
import ListGroup from 'react-bootstrap/ListGroup';
import React, {useEffect, useState} from 'react'


const PokeCards = ({poke}) => {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonById = async () => {
        try {
            const response = await Poke.getPokemonById(poke.url.substring(41).replaceAll("/", ""))
            setCurrentPokemon(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemonById()
    }, []);
console.log(poke)
    return <> {loading == false ?  <Card className={'col-3'}>
    <Link to={"/pokemon/details"} state={currentPokemon}>
        <Card.Img variant="top" height={"100px"} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+poke.url.substr(41).replaceAll("/","")+".svg"} />
        <Card.Body>
        <Card.Title
                className={"text-center"}>{currentPokemon.names != undefined && currentPokemon.names[4].name.charAt(0).toUpperCase() + currentPokemon.names[4].name.substring(1)} #{currentPokemon.id}</Card.Title>
                <ListGroup variant="flush">
                    {currentPokemon.egg_groups.map(type => {
                       return <ListGroup.Item>{type.name}</ListGroup.Item>
                    })}
                 </ListGroup>
        </Card.Body>
        </Link>
        </Card> :
        <Loading/>}
    </>;
}

export default PokeCards;
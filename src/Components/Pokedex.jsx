import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const PokeCards = ({poke}) => {
    return (
        <Card className={"col-3"}>
        <Card.Img variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/+poke."+poke.order+".png"} />
        <Card.Body>
            <Card.Title>{poke.name}</Card.Title>
            <Card.Text>
            </Card.Text>
            <Link to={"/poke/details"} state={poke}></Link>
        </Card.Body>
    </Card>
    )
}

export default PokeCards;
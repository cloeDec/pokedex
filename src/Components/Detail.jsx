import React from 'react'; 
import {Link} from 'react-router-dom';


const Detail = ({detail}) => {
    return <>
        <Link to={"/pokemon/details"+detail.id}></Link>
    </>
}

export default Detail;
import React from 'react';

import '../components/StarWars.css';

const Chars = props => {
    console.log(props);
    return (
        <div className='charCard'>
            <h2>Name: {props.character.name}</h2>
            <h3>Year of Birth: {props.character.birth_year}</h3>
            <p>Created: {props.character.created}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Height: {props.character.height}</p>
            
        </div>
    )
};

export default Chars;
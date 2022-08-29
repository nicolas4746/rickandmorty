import React from 'react';
import '../styles/characterCard.css'
const CharacterCard = ({image, name,species}) => {
    return (
        <div className="card">
            <figure className="img-container">
                <img src={image} alt={name}/>
            </figure>
            <article className="text-container">
                <h2>{name}</h2>
                <p>{species}</p>
            </article>
        </div>
    )
}

export default CharacterCard;
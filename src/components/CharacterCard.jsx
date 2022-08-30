import React from 'react';
import '../styles/characterCard.css'
const CharacterCard = ({image, name,species,handleClick,id}) => {
    return (
        <div className="card">
            <figure className="img-container">
                <img src={image} alt={name}/>
            </figure>
            <article className="text-container">
                <h2>{name}</h2>
                <p>{species}</p>
                <button className="btn-add-fav"type="button" onClick={()=>handleClick({image, name, species,id})}>agregar a favoritos</button>
            </article>
        </div>
    )
}

export default CharacterCard;
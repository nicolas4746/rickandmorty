import React from 'react';
import '../styles/characterCard.css'
const CharacterCardFavorites = ({image, name,species,handleClickRemove,id}) => {
    return (
        <div className="card">
            <figure className="img-container">
                <img src={image} alt={name}/>
            </figure>
            <article className="text-container">
                <h2>{name}</h2>
                <p>{species}</p>
                <button type="button" onClick={()=>handleClickRemove(id)}>Eliminar de favoritos</button>
            </article>
        </div>
    )
}

export default CharacterCardFavorites;
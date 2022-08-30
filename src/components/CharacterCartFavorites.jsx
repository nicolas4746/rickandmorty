import React from 'react';
import '../styles/characterCardFavorites.css'
const CharacterCardFavorites = ({image, name,species,handleClickRemove,id}) => {
    return (
        <div className="card-fav">
            <figure className="img-container-fav">
                <img src={image} alt={name}/>
            </figure>
            <article className="text-container-fav">
                <h2>{name}</h2>
                <button className="btn-del-fav" type="button" onClick={()=>handleClickRemove(id)}>Eliminar de favoritos</button>
            </article>
        </div>
    )
}

export default CharacterCardFavorites;
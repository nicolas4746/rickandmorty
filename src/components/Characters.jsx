import React, {useState, useEffect} from 'react'
import CharacterCard from './CharacterCard';
import '../styles/character.css'

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    const renderCharacters = characters.map((character)=>(
        <CharacterCard key={character.id} {...character}/>
    ))

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, []);

    return (
       <div className="Characters">
            <div className="characters-container">{renderCharacters}</div>
       </div> 
    );
}

export default Characters;
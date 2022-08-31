import React, {useState, useEffect, useReducer, useMemo, useRef, useCallback} from 'react'
import CharacterCard from './CharacterCard';
import CharacterCardFavorites from './CharacterCartFavorites';
import '../styles/character.css'
import CharacterNotFound from './CharacterNotFound';
import Search from './Search';

const initialState = {
    favorites: [],
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            const isExist = state.favorites.find(item => item.id === action.payload.id)
            if (isExist) return { ...state }
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(items => items.id !== action.payload)
            };

        default:
            return state;
    }
}

const Characters = () => {   
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const[search,setSearch] = useState('');
    const searchInput = useRef(null);

   /*  const handleSearch = () => {
        setSearch(searchInput.current.value)
    } */
    const handleSearch = useCallback( ()=>{
        setSearch(searchInput.current.value)
    }, []);


    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, []);

    const handleClick = (favorite) => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
    }
    const handleClickRemove = (id) => {
        dispatch({ type: 'REMOVE_FAVORITE', payload: id })
    }

    const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
    );

      
    return (
        <div className="Characters">
            {favorites.favorites.length > 0 &&
            <div className="div-container-fav">
                <h3 className="character-title">Favoritos</h3>
                <div className="Favorites-container">
                    {favorites.favorites.map(favorite=> (
                        <CharacterCardFavorites key={favorite.id} {...favorite} handleClickRemove={handleClickRemove}/>
                    ))}
                </div>
            </div>
            }
            <h3 className="character-title">Personajes</h3>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            {filteredUsers.length >0 && 
                <div className="characters-container">
                {filteredUsers.map(character=> 
                  <CharacterCard key={character.id} {...character} handleClick={handleClick}/> )} 
                </div>
            }
            {filteredUsers.length <1 && 
            <div className='search-not-found'>
                <CharacterNotFound/>
            </div>
            }
       </div> 
    );
}

export default Characters;

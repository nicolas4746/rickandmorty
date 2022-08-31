import React from 'react';
import '../styles/search.css'

const Search = ({search, searchInput, handleSearch}) => {
    return (
        <div className='search-input-container'>
                <input placeholder='busque su personaje' type="text" value={search} ref={searchInput} onChange={handleSearch}/>
        </div>
    );
}

export default Search;
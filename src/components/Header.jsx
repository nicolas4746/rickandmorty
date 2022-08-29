import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import "../styles/Header.css"
const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const {theme, updateTheme} = useContext(ThemeContext);
    
    const handleClick = () => {
        setDarkMode(!darkMode);
        theme === 'lightMode' ? updateTheme('darkMode') : updateTheme('lightMode');
    };
    return (
        <div className="header">
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClick}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default Header;
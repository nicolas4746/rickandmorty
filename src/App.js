import React,{useState} from 'react';
import '../src/styles/App.css';
import Header from './components/Header';
import Characters from './components/Characters'
import ThemeContext from './context/ThemeContext';
function App() {
  const [theme, updateTheme]= useState('lightMode');

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      <div className={"App "+ theme}>
        <Header/>
        <Characters/>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;

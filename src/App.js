import React, { useState } from 'react';
import './index.css';
import Search from './components/search';

function App() {
  const apiURL = "http://www.omdbapi.com/?apikey=973560cd"
  const [state, setState] = useState({
    s: "", 
    results: [], 
    selected: {}
  });

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search/>
      </main>
    </div>
  );
}

export default App;

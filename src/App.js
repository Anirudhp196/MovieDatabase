import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import Search from './components/search';
import Results from './components/results';
import Popup from './components/popup';

function App() {
  const apiURL = "http://www.omdbapi.com/?apikey=973560cd"
  const [state, setState] = useState({
    s: "", 
    results: [], 
    selected: {}
  });

  const search = (e) => {
    if(e.key === "Enter") {
      axios(apiURL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        console.log(results);
        setState(prevState => {
          return { ...prevState, results: results }
        });
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
    console.log(state.s);
  }

  const openPopup = id => {
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let result = data;
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {} }
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search = {search}/>
        <Results results = {state.results} openPopup = {openPopup}/>
        {(typeof state.selected.Title != "undefined") ? 
          <Popup selected = {state.selected} closePopup = {closePopup}/> 
          : false}
      </main>
    </div>
  );
}

export default App;

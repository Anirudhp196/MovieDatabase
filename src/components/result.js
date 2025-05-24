import React from 'react'
import '../index.css'

function result({ result, openPopup }) {

    const { Poster, Title, imdbID } = result;

  return (
    <div className='result' onClick={() => openPopup(imdbID)}>
        <img src={Poster}/>
        <h3>{Title}</h3>
    </div>
  )
}

export default result
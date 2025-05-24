import React from 'react'
import '../index.css'

function search({ handleInput, search }) {
  return (
    <section>
        <input type="text" 
        placeholder = "Enter Movie Here: " 
        className="searchbox" 
        onChange={handleInput}
        onKeyDown={search}/>
    </section>
  )
}

export default search
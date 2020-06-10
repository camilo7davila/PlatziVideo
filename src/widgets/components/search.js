import React from 'react';
import './search.css'

// function Search (props) {
//     return
// }

const Search  = (props) => (
    <form action="" className="Search" onSubmit={props.handleSubmit}>
        <input type="text" defaultValue="Luis Fonsi" ref={props.setRef} className="Search-input" placeholder="Busca tu video favorito" name="search"/>
    </form>
) 

export default Search
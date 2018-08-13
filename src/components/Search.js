import React from 'react';

class Search extends React.Component {
render () {
return (
    <React.Fragment>
    <h1 className="title">Harry Potter Characters</h1>
    <input className="input" type="text" onChange={this.props.searchCharacterMetod} value={this.props.searchCharacter}/>
    <select name="house" id="" onChange={this.props.searchHouse} value={this.props.house}>
    <option value="">Filtrar por Casa</option>
    <option value="Gryffindor">Gryffindor</option>
    <option value="Hufflepuff">Hufflepuff</option>
    <option value="Ravenclaw">Ravenclaw</option>
    <option value="Slytherin">Slytherin</option>
    </select>
    <select name="house" id="" onChange={this.props.searchAliveMetod} value={this.props.alive}>
    <option value="">Filtrar por Estado fisico</option>
    <option value="muerto">Muetto</option>
    <option value="vivo">Vivito</option>
    </select>
    </React.Fragment>
 );
}
}

export default Search;
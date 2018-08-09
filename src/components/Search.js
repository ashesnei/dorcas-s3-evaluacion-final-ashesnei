import React from 'react';

class Search extends React.Component {
render () {
return (
    <React.Fragment>
    <h1 className="title">Harry Potter Characters</h1>
    <input className="input" type="text" onChange={this.props.searchCharacterMetod} value={this.props.searchCharacter}/>
    </React.Fragment>
 );
}
}

export default Search;
import React from 'react';
import Hplist from './Hplist';
import Search from './Search';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search searchCharacterMetod={this.props.searchCharacterMetod} />
        <Hplist hpcharacters={this.props.hpcharacters} searchCharacter={this.props.searchCharacter} />
      </React.Fragment>
    );
  }
}

export default Home;
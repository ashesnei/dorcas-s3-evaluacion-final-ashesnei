import React from 'react';
import Hplist from './Hplist';
import Search from './Search';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search searchCharacterMetod={this.props.searchCharacterMetod} searchCharacter={this.props.searchCharacter} house={this.props.house} searchHouse ={this.props.searchHouse} alive={this.props.alive} searchAliveMetod={this.props.searchAliveMetod}/>
        <Hplist hpcharacters={this.props.hpcharacters} searchCharacter={this.props.searchCharacter} house={this.props.house} alive={this.props.alive}/>
      </React.Fragment>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterCardDetail from './components/CharacterCardDetail';
import './stylesheets/App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hpcharacters: [],
      searchCharacter: "",
      searchHouse:"",
      alive: ""
    }
    this.searchCharacterMetod = this.searchCharacterMetod.bind(this);
    this.searchHouseMetod = this.searchHouseMetod.bind(this);
    this.searchAliveMetod = this.searchAliveMetod.bind(this);
  }
  componentDidMount() {
    this.giveMeCharacters();
  }

  giveMeCharacters() {
    fetch("https://hp-api.herokuapp.com/api/characters/")
      .then(response => response.json())
      .then(data => {
        let indexado = [];
        for(let i=0; i< data.length; i++) {
          indexado[i] = {...data[i], id:i};
        }
        this.setState({
          hpcharacters: indexado
        });
      });
  }

  searchCharacterMetod(e) {
    const character = e.currentTarget.value;
    this.setState({
      searchCharacter: character
    });
  }
  searchAliveMetod(e) {
    const alive = e.currentTarget.value;
    this.setState({
      alive: alive
    });
  }
  searchHouseMetod(e) {
    const house = e.currentTarget.value;
    this.setState({
      searchHouse: house
    });
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home searchCharacterMetod={this.searchCharacterMetod} searchAliveMetod={this.searchAliveMetod} alive={this.state.alive} hpcharacters={this.state.hpcharacters} searchCharacter={this.state.searchCharacter} house={this.state.searchHouse} searchHouse={this.searchHouseMetod} />} />
          <Route path="/CharacterCard/:id" render={(props) => <CharacterCardDetail match={props.match} hpcharacters={this.state.hpcharacters} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

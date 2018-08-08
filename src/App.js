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
      searchCharacter: ""
    }
    this.searchCharacterMetod = this.searchCharacterMetod.bind(this);
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


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home searchCharacterMetod={this.searchCharacterMetod} hpcharacters={this.state.hpcharacters} searchCharacter={this.state.searchCharacter} />} />
          <Route path="/CharacterCard/:id" render={(props) => <CharacterCardDetail match={props.match} hpcharacters={this.state.hpcharacters} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

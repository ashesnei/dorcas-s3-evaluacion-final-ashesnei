import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hpcharacters: []
    }
  }
  componentDidMount() {
    this.giveMeCharacters()
  }

  giveMeCharacters() {
    fetch("https://hp-api.herokuapp.com/api/characters/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          hpcharacters: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <ul className="listCharacter">
          {
            this.state.hpcharacters.map(item => {
              return (
                <li className="listCharacter__item">
                  <div className="listCharacter__character-card">
                    <div chassName="character-card__img-box">
                      <img src={item.image} alt={item.name}/>
                    </div>
                    <div className="character-card__info"> 
                      <h2 className="character-card__info-name">{item.name}</h2>
                      <h3 className="character-card__info-house">{item.house}</h3>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;

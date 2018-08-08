import React from 'react';

class CharacterDetail extends React.Component {
  render() {

    if (this.props.hpcharacters.length >= 1) {
      return (
        <div className="listCharacter__character-card">
          <div className="character-card__img-box">
            <img className="character-card__img-box--img" src={this.props.hpcharacters[this.props.match.params.id].image} alt={this.props.hpcharacters[this.props.match.params.id].name} />
          </div>
          <div className="character-card__info">
            <h2 className="character-card__info-name">{this.props.hpcharacters[this.props.match.params.id].name}</h2>
            <h3 className="character-card__info-house">{this.props.hpcharacters[this.props.match.params.id].house}</h3>
          </div>
        </div>
      );
    }
    else {
      return (
      <div>
        <p>cargando...</p>
      </div>
      );
    }
  }
}

export default CharacterDetail;
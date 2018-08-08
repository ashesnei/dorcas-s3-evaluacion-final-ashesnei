import React from 'react';

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="listCharacter__character-card">
        <div className="character-card__img-box">
          <img className="character-card__img-box--img" src={this.props.item.image} alt={this.props.item.name} />
        </div>
        <div className="character-card__info">
          <h2 className="character-card__info-name">{this.props.item.name}</h2>
          <h3 className="character-card__info-house">{this.props.item.house}</h3>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
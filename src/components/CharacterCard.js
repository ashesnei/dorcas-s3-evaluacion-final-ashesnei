import React from 'react';
import '../stylesheets/CharacterCard.css';

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="listCharacter__character-card">
          <div className="character-card__img-box" style={{backgroundImage:'url(' + this.props.item.image + ')'}}>
            <img className="character-card__img-box--img" src={this.props.item.image} alt="`{this.props.item.name} portrait`" />
          </div>
        <div className="character-card__info">
          <h2 className="character-card__info-name">{this.props.item.name}</h2>
          <p className="character-card__info-house">{this.props.item.house}</p>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
import React from 'react';
import '../stylesheets/CharacterCardDetail.css';
import { Link } from 'react-router-dom';


class CharacterDetail extends React.Component {

  alive() {
    const live = '🧙‍';
    const death = '💀';

    if (this.props.hpcharacters[this.props.match.params.id].alive === true) {
      return <p className="character-card-detail__info-alive">{live}</p>
    } else {
      return <p className="character-card-detail__info-alive">{death}</p>
    }
  }
  render() {

    if (this.props.hpcharacters.length >= 1) {
      return (
        <React.Fragment>
        <Link className="linkBack" to="/">◀ ️Back</Link>
        <div className="listCharacter__character-card-detail">
          <div className="character-card-detail__img-box" style={{backgroundImage:'url(' + this.props.hpcharacters[this.props.match.params.id].image + ')'}}>
            <img className="character-card-detail__img-box--img" src={this.props.hpcharacters[this.props.match.params.id].image} alt={this.props.hpcharacters[this.props.match.params.id].name} />
          </div>
          <div className="character-card-detail__info">
            <h2 className="character-card-detail__info-name">{this.props.hpcharacters[this.props.match.params.id].name}</h2>
            <div className="character-card-detail__description">
              <p className="character-card-detail__info-birth">nacimiento: {this.props.hpcharacters[this.props.match.params.id].yearOfBirth}</p>
              <p className="character-card-detail__info-house">Casa: {this.props.hpcharacters[this.props.match.params.id].house}</p>
              <p className="character-card-detail__info-patronus">patronus: {this.props.hpcharacters[this.props.match.params.id].patronus}</p>
              {this.alive()}
            </div>
          </div>
        </div>
        </React.Fragment>
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
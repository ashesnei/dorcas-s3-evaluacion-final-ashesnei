import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

class Hplist extends React.Component {
  render() {
    return (
      <ul className="listCharacter">
        {
          this.props.hpcharacters
            .filter(item => {
              return item.name.toLowerCase().includes(this.props.searchCharacter.toLowerCase());
            })
            .map(item => {
              return (
                <li className="listCharacter__item" key={item.id}>
                  <Link className= "link" to={`/CharacterCard/${item.id}`} ><CharacterCard item={item} /></Link>
                </li>
              )
            })
        }
      </ul>
    );
  }
}

export default Hplist;
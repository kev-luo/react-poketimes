import React, { Component } from 'react'; 
import axios from 'axios';
import Rainbow from '../hoc/rainbow';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'

class Home extends Component {
  state = {
    type: '',
    pokemon: []
  }

  async componentDidMount() {
    let search = Math.floor(Math.random() * 18) + 1;
    let res = await axios.get(`https://pokeapi.co/api/v2/type/${search}`)

    console.log(res);
    this.setState({
      type: res.data.name,
      pokemon: res.data.pokemon.slice(0,10)
    })
  }

  render () {

    const { type, pokemon } = this.state;
    const header = <h4 className="center">{type} type</h4>;

    const ListLength = pokemon.length;

    const pokeList = (ListLength) ? (
      pokemon.map(pokemon => {
        return (
          <div className="post card" key={pokemon.pokemon.name}>
            <img src={ Pokeball } alt="pokeball"/>
            <div className="card-content">
              <span className="card-title red-text">{pokemon.pokemon.name}</span>
              <Link to={`/${pokemon.pokemon.name}`}>
                <p>{pokemon.pokemon.name} stats</p>
              </Link>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No pokemon</div>
    )

    return (
      <div className="container home">
        {header}
        {pokeList}
      </div>
    )
  }

}

export default Rainbow(Home);
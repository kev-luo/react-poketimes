import React, { Component } from 'react';
import axios from 'axios';

class Pokemon extends Component {
  state = {
    pokemon: null
  }

  async componentDidMount() {
    console.log(this.props);
    let pokemon = this.props.match.params.pokemon
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    this.setState({
      pokemon: res.data
    })
    console.log(this.state);
  }

  render() {
    const pokemon = this.state.pokemon ? (
      <div className="pokemon container center">
        <h4 className="center">{this.state.pokemon.name.toUpperCase()}</h4>
        <img src= {this.state.pokemon.sprites.other['official-artwork']['front_default']}alt="pokepic"/>
        <p>Height: {this.state.pokemon.height}</p>
        <p>Weight: {this.state.pokemon.weight}</p>
        <p>HP: {this.state.pokemon.stats[0].base_stat}</p>
        <p>Attack: {this.state.pokemon.stats[1].base_stat}</p>
        <p>Defense: {this.state.pokemon.stats[2].base_stat}</p>
        <p>Special-Attack: {this.state.pokemon.stats[3].base_stat}</p>
        <p>Special-Defense: {this.state.pokemon.stats[4].base_stat}</p>
        <p>Speed: {this.state.pokemon.stats[5].base_stat}</p>
      </div>
    ) : (
      <h4 className="center">Loading Stats...</h4>
    )

    return (
      <div className="container display">
        {pokemon}
      </div>
    )
  }
}

export default Pokemon;
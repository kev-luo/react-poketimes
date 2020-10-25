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
      <div className="pokemon container">
        <h4 className="center">{this.state.pokemon.name.toUpperCase()}</h4>
        <p>Height: {this.state.pokemon.height}<br />
        Weight: {this.state.pokemon.weight}<br />
        HP: {this.state.pokemon.stats[0].base_stat}<br />
        Attack: {this.state.pokemon.stats[1].base_stat}<br />
        Defense: {this.state.pokemon.stats[2].base_stat}<br />
        Special-Attack: {this.state.pokemon.stats[3].base_stat}<br />
        Special-Defense: {this.state.pokemon.stats[4].base_stat}<br />
        Speed: {this.state.pokemon.stats[5].base_stat}</p>
        <img src= {this.state.pokemon.sprites.other['official-artwork']['front_default']}alt="pokepic"/>
      </div>
    ) : (
      <h4 className="center">Loading Stats...</h4>
    )

    return (
      <div className="display">
        {pokemon}
      </div>
    )
  }
}

export default Pokemon;
import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Pokemon from './components/pokemon';
import PokeThoughts from './components/pokeThoughts';
import PokeThought from './components/pokeThought';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/pokeThoughts' component={ PokeThoughts } />
            <Route path='/pokeThoughts/:post_id' component={ PokeThought } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path= '/:pokemon' component={ Pokemon } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

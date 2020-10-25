import { Link, NavLink } from 'react-router-dom';
import Rainbow from '../hoc/rainbow';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <div className="brand-logo">Poke'Times</div>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pokeThoughts">PokeThoughts</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Rainbow(Navbar);
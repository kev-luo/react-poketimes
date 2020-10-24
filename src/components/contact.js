import Rainbow from '../hoc/rainbow';
import { Link } from 'react-router-dom';

const Contact = (props) => {
  
  console.log(props.history)
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Visit <a href="https://pokeapi.co/">Pokemon Api</a> for more info.</p>
    </div>
  )
}

export default Rainbow(Contact);
import Rainbow from '../hoc/rainbow';

const About = () => {
  return (
    <div className="container center">
      <h4>About</h4>
      <p>The home page displays a random pokemon type. Click on a pokemon to see their stats!</p>
    </div>
  )
}

export default Rainbow(About);
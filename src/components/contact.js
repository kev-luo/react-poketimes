import Rainbow from '../hoc/rainbow';

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('./about')
  }, 2000)
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos dicta magni id accusantium obcaecati, porro at consequuntur. Impedit assumenda magni in autem aspernatur quam! Distinctio hic earum tempora repellendus.</p>
    </div>
  )
}

export default Rainbow(Contact);
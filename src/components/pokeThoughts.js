import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class PokeThoughts extends Component {

  render () {
    // console.log(this.props)
    const { posts } = this.props;

    const ListLength = posts.length;

    const postsList = (ListLength) ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={ Pokeball } alt="pokeball"/>
            <div className="card-content">
              <Link to={`/pokeThoughts/${post.id}`}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts...</div>
    )

    return (
      <div className="container home">
        <h4 className="center">Posts</h4>
        {postsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => { // // adds a post key to the PokeThoughts component prop object
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PokeThoughts); // since connect is a function and a higher order component, we first have to invoke the connection fxn which returns a higher order component. The returned higher order component then wraps PokeThoughts. passing in mapStateToProps lets redux know what data we want to grab (state.posts) and what property to apply that data to (posts)
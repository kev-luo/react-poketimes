import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokeThought extends Component {
  
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    // console.log(this.props);
    const post = this.props.post ? (
      <div className="container">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
        </div>
      </div>
    ) : (
      <h4 className="center">Loading Stats...</h4>
    )

    return (
      <div className="display">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => { // adds a post key to the PokeThought component props object
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id.toString() === id)
  }
}

const mapDispatchToProps = (dispatch) => { // adds a deletePost key to the PokeThought component props object
  return {
    deletePost: (id) => {
      dispatch({type: 'DELETE_POST', id: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeThought);
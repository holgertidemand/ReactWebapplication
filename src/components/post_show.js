import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class PostShow extends Component {

  componentDidMount(){
   const { id } = this.props.match.params
   this.props.fetchPost(id);
  }

  render (){
    const { post } = this.props;

    if (!post) {
      return <div> Loading... </div>
    }

    return ( 
      <div>
        <h1>{ post.title }</h1>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}



function mapStateToProps({ posts }, ownProps) {
  // ownProps === this.props
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
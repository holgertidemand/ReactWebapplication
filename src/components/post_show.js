import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';


class PostShow extends Component {

  componentDidMount(){
   const { id } = this.props.match.params
   this.props.fetchPost(id);
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render (){
    const { post } = this.props;

    if (!post) {
      return <div> Loading... </div>
    }

    return ( 
      <div>
        <div className="text-xs-right">
          <Link to='/'>Back to HomePage</Link>
          <button 
            className=" btn btn-danger"
            onClick={ this.onDeleteClick }
          >
          </button>
        </div>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
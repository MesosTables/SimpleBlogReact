import React from 'react';
import { Component, PropTypes } from 'react';
import {fetchPost, deletePost} from '../actions/index';
import { connect } from 'react-redux';
import { Link } from  'react-router';

class PostsShow extends Component{
	static contextTypes={
		router: PropTypes.object
	};

	componentWillMount(){
		this.props.fetchPost(this.props.params.id);
	}

//delete selected post and return to main page
	onDeleteClick(){
		this.props.deletePost(this.props.params.id)
		.then(()=> {
			//blog post has been deletes navigate user to index
			//we navigate by calling this.context.router.push w/
			//the new path to navigate to.
			this.context.router.push('/');
		});
	}

	render(){
		const {post} = this.props;

		if (!post) {
				return <div>Loading...</div>;
			}
		return(
			<div>
				<Link to={`/`} className="btn btn-primary">
							Back
				</Link>
				<button 
					className = "btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { post: state.posts.post};
}

export default connect( mapStateToProps, {fetchPost, deletePost})(PostsShow);

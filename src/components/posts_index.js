import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router'

class PostsIndex extends Component{
	//will call this automatically when the component is rendered in the DOM
	componentWillMount(props){
		this.props.fetchPosts(props);
	}

	renderPosts(){
		return this.props.posts.map((post) =>{
			return(
				<li 
					key={post.id} 
					className="list-group-item"> 
						<Link to={"posts/" + post.id}>
							<span className="pull-xs-right">{post.title} </span>
							<strong>{post.title}</strong>
						</Link>
				</li>
			);
		});
	}

	render(){
		return(
			<div>
				<div className="text-xs-right">
					<Link to={`/posts/new`} className="btn btn-primary">
						Create Post
					</Link>
				</div>
				<h3> POSTS</h3>
					<ul className = "list-group">
						{this.renderPosts()}
					</ul>
				
			</div>
			);
	}
}


function mapStateToProps(state){
	return { posts: state.posts.all};
}

// function mapDispatchToProps (dispatch){
// 	return bindActionCreators ( { fetchPosts}, dispatch);
// }

//{fetchPosts} will take the place mapDispatchToProps for fetchPosts above
export default connect( mapStateToProps, {fetchPosts})(PostsIndex);

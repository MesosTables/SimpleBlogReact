import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router'

class PostsIndex extends Component{
	//will call this automatically when the component is rendered in the DOM
	componentWillMount(){
		this.props.fetchPosts();
	}

	render(){
		return(
			<div>
				<div className="text-xs-right">
					<Link to={`posts/new`} className="btn btn-primary">
						LINK
					</Link>
				</div>
				List of blog posts
			</div>
			);
	}
}


// function mapDispatchToProps (dispatch){
// 	return bindActionCreators ( { fetchPosts}, dispatch);
// }

//{fetchPosts} will take the place mapDispatchToProps for fetchPosts above
export default connect( null, {fetchPosts})(PostsIndex);

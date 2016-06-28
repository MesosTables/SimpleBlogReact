//will be the mapping for which components are tied to which URL
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show'

//whenever is user at root show App component
// App shows all children components based on url
export default (
<Route path="/" component={App} >
	<IndexRoute component = {PostsIndex}/>
	<Route path="posts/new" component={PostsNew} />
	<Route path="posts/:id" component={PostsShow} />
</Route>
);

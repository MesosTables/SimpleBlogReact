import { renderComponent , expect } from '../test_helper';
import PostsIndex  from '../../src/components/posts_index';
import {fetchPosts} from '../../src/actions/index';

describe('PostsIndex' , () => {
  let component;

  beforeEach(() => {
  	const props = {posts: [{
			id: 18748,
			title: "soda",
			categories: "drinks"
			}]
		}
  	//const state = {posts: []};
  	console.log(props.posts[0].id)
    component = renderComponent(PostsIndex, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('renders the correct href', () => {
  	expect(component).to.contain('/posts/new')
  })
});

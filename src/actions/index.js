import axios from 'axios';


const API_KEY = 'mesos1235abc';
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`;

//constant for action type
export const FETCH_POSTS = 'FETCH_POSTS';

//will make the API request
export function fetchPosts(){
	const getAllPosts = `${ROOT_URL}`;
	//axios will make the ajax request, this will return a promise
	const request = axios.get(getAllPosts);

	return{
		type: FETCH_POSTS,
		payload: request
	};
}

import axios from 'axios';


const API_KEY = `?key=mesos1235abc`;
const ROOT_URL = `http://reduxblog.herokuapp.com/api`; 

//constant for action type
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

//will make the API request
export function fetchPosts(){
	const getAllPosts = `${ROOT_URL}/posts${API_KEY}`;
	//axios will make the ajax request, this will return a promise
	const request = axios.get(getAllPosts);

	return{
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
	return{
		type: CREATE_POST,
		payload: request
	}
}

//will make the API request
export function fetchPost(id){
	const getPost = `${ROOT_URL}/posts/${id}${API_KEY}`;
	//axios will make the ajax request, this will return a promise
	const request = axios.get(getPost);

	return{
		type: FETCH_POST,
		payload: request
	};
}

//will make the API request
export function deletePost(id){
	const deletePost = `${ROOT_URL}/posts/${id}${API_KEY}`;
	//axios will make the ajax request, this will return a promise
	const request = axios.delete(deletePost);

	return{
		type: DELETE_POST,
		payload: request
	};
}

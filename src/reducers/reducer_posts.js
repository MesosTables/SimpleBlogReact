import {FETCH_POSTS, DELETE_POST} from '../actions/index'
import {FETCH_POST} from '../actions/index'

//all will be the list of all the posts in an array
//post will be selected post
const INITIAL_STATE = {all: [], post:null};


export default function (state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_POSTS:
			//add all entries of state and a new entry
			return {...state, all:action.payload.data};
		case FETCH_POST:
			//entry of state and a new entry
			return {...state, post:action.payload.data};
		default:
			return state;
	}
}

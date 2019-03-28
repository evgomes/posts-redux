import { combineReducers } from 'redux';
import postsReducer from '../posts/store/posts-reducer';

export const rootReducer = combineReducers({
    posts: postsReducer
});
import { IPostsState, POSTS_INITIAL_STATE } from './posts-state';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './posts-actions';

export default function postsReducer(state: IPostsState = POSTS_INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS_REQUEST: return handleFetchPostsRequest(state, action);
        case FETCH_POSTS_SUCCESS: return handleFetchPostsSuccess(state, action);
        case FETCH_POSTS_ERROR: return handleFetchPostsError(state, action);
    }
    
    return state;
}

function handleFetchPostsRequest(state, action) {
    let posts = Object.assign({}, state.posts);
    posts.loading = true;
    posts.error = null;
    posts.data = null;

    return {
        ...state,
        posts
    };
}

function handleFetchPostsSuccess(state, action) {
    let posts = Object.assign({}, state.posts);
    posts.loading = false;
    posts.error = null;
    posts.data = action.posts;

    return {
        ...state,
        posts
    };
}

function handleFetchPostsError(state, action) {
    let posts = Object.assign({}, state.posts);
    posts.loading = false;
    posts.error = action.error;
    posts.data = null;

    return {
        ...state,
        posts
    };
}
import Post from '../models/post';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export function fetchPostsRequest() {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export function fetchPostsSuccess(posts: Post[]) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts
    }
}

export function fetchPostsError() {
    return {
        type: FETCH_POSTS_ERROR
    };
}
import { IPostsState, POSTS_INITIAL_STATE } from '../posts/store/posts-state';

export interface IAppState {
    posts: IPostsState
};

export const INITIAL_STATE: IAppState = {
    posts: POSTS_INITIAL_STATE
};
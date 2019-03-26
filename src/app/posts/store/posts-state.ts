export interface IPostsState {
    posts: {
        loading: boolean,
        error: {},
        data: []
    }
};

export const POSTS_INITIAL_STATE: IPostsState = {
    posts: {
        loading: false,
        error: null,
        data: null
    }
};
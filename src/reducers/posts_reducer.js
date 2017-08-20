import {FETCH_POSTS, FETCH_POST, SEARCH_POSTS, CATEGORY_POSTS} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POST:
        case SEARCH_POSTS:
        case CATEGORY_POSTS:
            return action.payload;
    }
    return state;
}

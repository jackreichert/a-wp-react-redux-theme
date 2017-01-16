import {FETCH_POSTS, FETCH_POST, SEARCH_POSTS} from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POST:
        case SEARCH_POSTS:
            return action.payload;
    }
    return state;
}

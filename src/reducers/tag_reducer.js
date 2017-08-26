import {FETCH_TAG_INFO} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TAG_INFO:
            return action.payload;
    }
    return state;
}
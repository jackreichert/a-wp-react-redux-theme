import {FETCH_CAT_INFO} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CAT_INFO:
            return action.payload;
    }
    return state;
}
import {FETCH_TAX_INFO} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TAX_INFO:
            return action.payload;
    }
    return state;
}
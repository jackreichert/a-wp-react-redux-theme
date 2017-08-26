import {ROUTER} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case ROUTER:
            return action.payload;
    }
    return state;
}
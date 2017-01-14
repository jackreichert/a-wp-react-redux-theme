import {FETCH_MENU} from '../actions';

export default function (state = {name: "", items: []}, action) {
    switch (action.type) {
        case FETCH_MENU:
            return action.payload;
    }
    return state;
}
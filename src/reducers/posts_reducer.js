import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
    case FETCH_POST:
      return action.payload;
  }
  return state;
}

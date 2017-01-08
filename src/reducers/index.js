import { combineReducers } from 'redux';

import postsReducer from './posts_reducer';

export default combineReducers({
  posts: postsReducer
});

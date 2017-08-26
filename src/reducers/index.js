import {combineReducers} from 'redux';

import posts from './posts_reducer';
import menu from './menu_reducer';
import tags from './tag_reducer';
import cat from './cat_reducer';
import comments from './comments_reducer';
import routerMatch from './routerMatch_reducer';

export default combineReducers({
    posts,
    menu,
    tags,
    cat,
    comments,
    routerMatch
});

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SEARCH_POSTS = 'SEARCH_POSTS';
export const FETCH_MENU = 'FETCH_MENU';

const WP_API_ENDPOINT = `${RT_API.root}wp/v2/`;
const PRETTYPERMALINK_ENDPOINT = `${RT_API.root}react-theme/v1/prettyPermalink/`;
const MENU_ENDPOINT = `${RT_API.root}react-theme/v1/menu-locations/`;

export function fetchPosts(pageNum = 1, post_type = 'posts') {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}${post_type}?_embed&page=${pageNum}`)
            .then(response => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: response.data
                });
            });
    }
}

export function fetchPostsFromCat(slug = 'uncategorized', post_type = 'posts') {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}${post_type}?_embed&categories=${getCategoryIdFromSlug(slug)}`)
            .then(response => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: response.data
                });
            });
    }
}

function getCategoryIdFromSlug(slug) {
    return RT_API['categories'].filter(cat => {
        return cat.slug === slug
    })[0].term_id;
}

export function fetchPost(prettyPermalink) {
    return function (dispatch) {
        axios.get(`${PRETTYPERMALINK_ENDPOINT}${prettyPermalink}`)
            .then(response => {
                dispatch({
                    type: FETCH_POST,
                    payload: [response.data]
                });
            });
    }
}

export function fetchMenu(menu) {
    return function (dispatch) {
        axios.get(`${MENU_ENDPOINT}${menu}`)
            .then(response => {
                dispatch({
                    type: FETCH_MENU,
                    payload: {items: response.data, name: menu}
                });
            });
    }
}

export function searchSite(term, post_type = 'posts') {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}${post_type}?_embed&search=${term}`)
            .then(response => {
                dispatch({
                    type: SEARCH_POSTS,
                    payload: response.data
                });
            })
    }
}
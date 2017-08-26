import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SEARCH_POSTS = 'SEARCH_POSTS';
export const CATEGORY_POSTS = 'CATEGORY_POSTS';
export const FETCH_CAT_INFO = 'FETCH_CAT_INFO';
export const FETCH_TAG_INFO = 'FETCH_TAG_INFO';
export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const ROUTER = 'ROUTER';

const WP_API_ENDPOINT = `${RT_API.root}wp/v2`;
const PRETTYPERMALINK_ENDPOINT = `${RT_API.root}react-theme/v1/prettyPermalink/`;
const MENU_ENDPOINT = `${RT_API.root}react-theme/v1/menu-locations/`;

export function fetchPosts(pageNum = 1, post_type = 'posts') {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}/${post_type}?_embed&page=${pageNum}`)
            .then(response => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: response.data
                });
            });
    }
}

export function fetchPostsFromTax(tax = 'categories', taxId = 0, pageNum = 1, post_type = 'posts') {
    return function (dispatch) {
        const url = `${WP_API_ENDPOINT}/${post_type}?_embed&${tax}=${taxId}&page=${pageNum}`;
        axios.get(url)
            .then(response => {
                dispatch({
                    type: CATEGORY_POSTS,
                    payload: response.data
                });
            });
    }
}

export function getTaxIdFromSlug(tax, slug) {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}/${tax}?slug=${slug}`)
            .then(response => {
                switch (tax) {
                    case "tags":
                        dispatch({
                            type: FETCH_TAG_INFO,
                            payload: response.data
                        });
                        break;
                    case "categories":
                        dispatch({
                            type: FETCH_CAT_INFO,
                            payload: response.data
                        });
                        break;
                }

            });
    }
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

export function fetchTaxInfo(tax, tagIds) {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}/${tax}/?include=${tagIds}`)
            .then(response => {
                dispatch({
                    type: FETCH_TAG_INFO,
                    payload: response.data
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
        axios.get(`${WP_API_ENDPOINT}/${post_type}?_embed&search=${term}`)
            .then(response => {
                dispatch({
                    type: SEARCH_POSTS,
                    payload: response.data
                });
            })
    }
}

export function fetchComments(postId) {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}/comments?post=${postId}&orderby=parent&per_page=100`)
            .then(response => {
                dispatch({
                    type: FETCH_COMMENTS,
                    payload: response.data
                });
            })
    }
}

export function createComment(params = {post: 0, parent: 0, author_name: '', author_email: '', content: ''}) {
    return function (dispatch) {
        axios({
            method: 'post',
            url: `${WP_API_ENDPOINT}/comments`,
            headers: {'X-WP-Nonce': RT_API.nonce},
            data: params
        })
            .then(response => {
                dispatch({
                    type: CREATE_COMMENT,
                    payload: response.data
                });
            });
    }
}

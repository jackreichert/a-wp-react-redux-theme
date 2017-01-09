import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

const WP_API_ENDPOINT = `${RT_API.root}wp/v2/`;
const PRETTYPERMALINK_ENDPOINT = `${RT_API.root}react-theme/v1/url/`;

export function fetchPosts(pageNum=1, post_type='posts') {
  return function(dispatch) {
    axios.get(`${WP_API_ENDPOINT}${post_type}?_embed&page=${pageNum}`)
      .then(response => {
        dispatch({
          type: FETCH_POSTS,
          payload: response.data
        });
      });
  }
}

export function fetchPost(prettyPermalink) {
  return function(dispatch) {
    axios.get(`${PRETTYPERMALINK_ENDPOINT}${prettyPermalink}`)
      .then(response => {
        dispatch({
          type: FETCH_POST,
          payload: [response.data]
        });
      });
  }
}

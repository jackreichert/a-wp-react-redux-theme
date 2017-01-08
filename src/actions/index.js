import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

const WP_API_ENDPOINT = `${RT_API.root}wp/v2/`;

export function fetchPosts(pageNum=1, post_type='posts') {
  return function(dispatch) {
    const request = axios.get(`${WP_API_ENDPOINT}${post_type}?_embed&page=${pageNum}`)
      .then(response => {
        dispatch({
          type: FETCH_POSTS,
          payload: response.data
        });
      });
  }
}

export function fetchPost(post_id=1, post_type='posts') {
  const url = `${WP_API_ENDPOINT}${post_type}/${post_id}?_embed`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  }
}

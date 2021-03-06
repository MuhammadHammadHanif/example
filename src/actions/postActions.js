import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPost = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    })
  );
};

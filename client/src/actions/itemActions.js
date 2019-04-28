import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
  dispatch(loadingItems());
  axios
    .get('/api/items')
    .then(res => dispatch({
      type: GET_ITEMS,
      payload: res.data,
    }));
}

export const addItem = item => dispatch => {
  axios({
    url: '/api/items',
    method: 'post',
    data: item,
  })
    .then(res => dispatch({
      type: ADD_ITEM,
      payload: res.data,
    }));
};

export const deleteItem = _id => dispatch => {
  axios
    .delete(`/api/items/${_id}`)
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: DELETE_ITEM,
          payload: _id
        });
      }
    });
};

export const loadingItems = () => ({
  type: ITEMS_LOADING,
});
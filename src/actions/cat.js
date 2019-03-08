import { API_BASE_URL } from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = err => ({
  type: FETCH_CAT_ERROR,
  err
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(err => dispatch(fetchCatError(err)));
};

export const adoptCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(() => {
      console.log('this ran');
      return dispatch(fetchCat());
    })
    .catch(err => dispatch(fetchCatError(err)));
};

import { API_BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = err => ({
  type: FETCH_DOG_ERROR,
  err
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/api/dog`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(dog => {
      return dispatch(fetchDogSuccess(dog));
    })
    .catch(err => dispatch(fetchDogError(err)));
};

export const adoptDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/api/dog`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(() => dispatch(fetchDog()))
    .catch(err => dispatch(fetchDogError(err)));
};

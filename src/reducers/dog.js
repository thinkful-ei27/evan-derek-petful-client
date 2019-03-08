import {
  FETCH_DOG_ERROR,
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS
} from '../actions/';

const initialState = {
  data: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.dog
      };
    case FETCH_DOG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.err
      };
    default:
      return state;
  }
};

export default reducer;

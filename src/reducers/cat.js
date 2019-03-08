import {
  FETCH_CAT_ERROR,
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS
} from '../actions/';

const initialState = {
  data: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.cat
      };
    case FETCH_CAT_ERROR:
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

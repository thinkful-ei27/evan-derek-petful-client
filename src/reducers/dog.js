import actions from '../actions';
const { FETCH_DOG_ERROR, FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS } = actions;

const initialState = {
  data: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_REQUEST:
      state = Object.assign({}, state, {
        loading: false,
        error: null
      });
      break;
    case FETCH_DOG_SUCCESS:
      state = Object.assign({}, state, {
        loading: false,
        data: action.dog
      });
      break;
    case FETCH_DOG_ERROR:
      state = Object.assign({}, state, {
        loading: false,
        error: action.err
      });
      break;
    default:
      break;
  }

  return state;
};

export default reducer;

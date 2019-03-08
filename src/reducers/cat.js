import actions from '../actions';
const { FETCH_CAT_ERROR, FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS } = actions;

const initialState = {
  data: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_REQUEST:
      state = Object.assign({}, state, {
        loading: true,
        error: null
      });
      break;
    case FETCH_CAT_SUCCESS:
      state = Object.assign({}, state, {
        loading: false,
        data: action.cat
      });
      break;
    case FETCH_CAT_ERROR:
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

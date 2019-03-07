import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from "../actions";
const initialState = {
  isLoading: false,
  characters: [],
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return{
        ...state,
        error: '',
        isLoading: true
    };
    case FETCH_DATA_SUCCESS:
    console.log(action.payload)
      return{
        ...state,
        isLoading: false,
        characters: [...state.characters, ...action.payload]
      };
      case FETCH_DATA_FAILURE:
      return{
        ...state,
        isLoading: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

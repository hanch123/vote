// import { fromJS } from 'immutable';
import {
  SHOW_POPUP
} from '../type/index';

const initialState = {
  showPopup: false
};
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return Object.assign({}, state, {
        showPopup: !state.showPopup
      });
    default:
      return state
  }
}
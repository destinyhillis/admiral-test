// import { combineReducers } from 'redux'
// import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
// const { SHOW_ALL } = VisibilityFilters

import { CREATE_COMPANY } from '../actionTypes/actionTypes';

const initialState = {
    companyName: "",
};

function rootReducer(state = [initialState], action) {
  switch (action.type) {
    case CREATE_COMPANY:
        console.log(action.payload, 'hit')
      return [
        ...state,
        {
          company: action.payload,
        }
      ]
    default:
      return state
  }
}

// const captainApp = combineReducers({
//     rootReducer
//   })

export default rootReducer;
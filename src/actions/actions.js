import { ADD_NAME } from '../actionTypes/actionTypes';
  
  export function companyNameStateChange(text){
      return function(dispatch){
        return dispatch({ type: ADD_NAME, payload: text });
      }
  };
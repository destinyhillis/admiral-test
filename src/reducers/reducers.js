import { ADD_NAME } from '../actionTypes/actionTypes';

const initialState = {
      startDate: new Date(),
      companyName: '',
    };
  
  
export const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_NAME) {
        return {
        companyName : action.payload
        }
    } 

return state;
};
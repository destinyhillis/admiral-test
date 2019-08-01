import { ADD_NAME, GET_COMPANY } from '../actionTypes/actionTypes';

const initialState = {
      startDate: new Date(),
      company: {},
      companyName: "",
    };
  
  
export const rootReducer = (state = initialState, action) => {
    if(action.type === ADD_NAME){
        console.log('hit reducer')
        // console.log(state, action.payload, 'state, payload')
        // return Object.assign({}, state, { companyName: state.companyName.concat(action.payload.data) });
    };

    if(action.type === GET_COMPANY){
        return{
            company: action.payload.data,
            companyName: action.payload.data.companyName,
        }
    };

return state;
};

// export function rootReducer(state = initialState, action) {
//     switch (action.type) {
//       case ADD_NAME:
//         console.log('hit backend');        
//         return [
//           ...state,
//           {
//             companyName: action.payload,
//           }
//         ]
//     //   case 'COMPLETE_TODO':
//     //     // Return a new array
//     //     return state.map((todo, index) => {
//     //       if (index === action.index) {
//     //         // Copy the object before mutating
//     //         return Object.assign({}, todo, {
//     //           completed: true
//     //         })
//     //       }
//     //       return todo
//     //     })
//       default:
//         return state
//     }
//   }
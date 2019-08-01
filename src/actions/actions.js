import { ADD_NAME, GET_COMPANY, ADD_FORM_DATE } from '../actionTypes/actionTypes';

  
export function companyNameStateChange(formData){
    console.log(formData, 'company name action')
    // return { type: ADD_NAME, payload: formData }
    return function(dispatch){
        return fetch("http://localhost:9000", {
            credentials: 'include',
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then(response => response.json())
            .then(json => { dispatch({ type: ADD_NAME, payload: json })
        })
    }
};


export function getCompany(data){
    return function(dispatch){
        return fetch("http://localhost:9000", {
            method: "GET",
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000",
            }
          })
            .then(response => response.json())
            .then(json => { dispatch({ type: GET_COMPANY, payload: json });
        })
    }
};

export function formationDateSelection(date){
    console.log(date, 'form date action')
    // return function(dispatch){
    //     return fetch("http://localhost:9000", {
    //         credentials: 'include',
    //         method: "POST",
    //         body: JSON.stringify(date),
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //         })
    //         .then(response => response.json())
    //         .then(json => { dispatch({ type: ADD_FORM_DATE, payload: json })
    //     })
    // }
};

import { GET_COMPANY, CREATE_COMPANY } from '../actionTypes/actionTypes';

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

export function createCompanyName(formData){
    console.log(formData, 'action')
    return fetch("http://localhost:9000", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    })
      .then(response => response.json())
      .then(json => { return ({ type: CREATE_COMPANY, payload: json })})

  };

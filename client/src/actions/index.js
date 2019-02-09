import axios from 'axios';

export function getAllUsers() {
    return dispatch => {
    axios.get("/api/appointments").then(res => {
      dispatch({type: 'GET_USERS', payload: res.data})
      })
      .catch(function(error){
          dispatch({type: 'GET_USER_ERROR', payload: error.response})
      })
    }
  };

 export function toggle(prevState){
     return {
         type: 'TOGGLE',
         modalIsOpen: !prevState
     }
 }




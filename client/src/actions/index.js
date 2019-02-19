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

 export function handleChange(name, value, id) {
    return {
        type: 'HANDLE_CHANGE',
        payload: {
            name,
            value,
            id
        }
    }
}

 export function changeAppointStatus(isAvailable, id){
    return {
        type: 'APPOINTMENT_STATUS',
        payload: {
            isAvailable,
            id
        }
    }
} 


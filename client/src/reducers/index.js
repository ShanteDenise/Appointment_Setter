const initalState = {
    appointments: [],
    modalIsOpen: false,
    id: "",  

    newAppointment: {
      first_name: "",
      last_name: "",
      phone: Number
    }
  };

  //Reducers

  function getAllUsers (state = initalState, action) {
      switch(action.type) {
          case 'GET_USERS':
          return{
              ...state,
              appointments: action.payload
          }
          case 'TOGGLE':
          return {
              ...state,
              modalIsOpen: action.modalIsOpen
          }
          default:
          return state 
        }
    }

   

  export default getAllUsers;
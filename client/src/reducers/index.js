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
          const appointments = action.payload
          console.log(appointments)
          return{
              ...state,
              appointments: action.payload
          }
          default:
          return state 
        }
    }

//     axios.get("/api/appointments").then(res => {
//       this.setState({
//         appointments: res.data
//       });
//     });
//   };


  export default getAllUsers;
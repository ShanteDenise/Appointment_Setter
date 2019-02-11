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


  // On Change
function editUser(appointments, payload) { 
    const result = appointments.map(appointment => //map through appointments
        appointment._id === payload.id ? { //if the appointment id is equal to the payload id
            ...appointment,  //make a copy of the appointment
            user: {      //Get the user object and make a copy of the user
                ...appointment.user,   
                [payload.name]: payload.value //set the name to the value of the input
            }
        } : appointment);

    return result;
}

function changeAppointmentStatus(appointments, payload) {
    const result = appointments.map(appointment =>  //map through appointments
        appointment._id === payload.id ? {
            ...appointment,
            isAvailable: payload.isAvailable  //if appointment is not available show appointment info if not
        } : appointment);  //ahow appointment 

    return result;
}


  //Reducers

  function getAllUsers(state = initalState, action) {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                appointments: action.payload
            }
        case 'TOGGLE':
            return {
                ...state,
                modalIsOpen: action.modalIsOpen
            }
        case 'HANDLE_CHANGE':
            const payload = action.payload;
            return {
                ...state,
                appointments: [...editUser(state.appointments, payload)]
            }

        case 'APPOINTMENT_STATUS':
            return {
                ...state,
                appointments: [...changeAppointmentStatus(state.appointments, action.payload)]
            }
        default:
            return state
    }
}

   

  export default getAllUsers;
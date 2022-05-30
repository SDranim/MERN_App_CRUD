import { GET_CONTACTS } from "../Actions/ActionsTypes";

const initialState = {
    users :[],
}

const UserReducer= (state = initialState, { type, payload }) => {

  switch (type) {

  case GET_CONTACTS:
    return { ...state, users:payload.users}
  default:
    return state
  }
}

export default  UserReducer;
import { SAVE_EMAIL_PASSWORD, SAVE_USER_PICTURE } from "./actions";

type initialState = {
  userData: userData;
};

type userData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userPicture: null | string;
  dateOfBirth: null | number;
  phone: null | number;
  SSN: null | number;
};

const initialState = {
  userData: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userPicture: null,
    dateOfBirth: null,
    phone: null,
    SSN: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_PICTURE:
      return {
        ...state,
        userData: {
          ...state.userData,
          userPicture: action.payload
        }
      };
    case SAVE_EMAIL_PASSWORD:
      return {
        ...state,
        userData: {
          ...state.userData,
          email: action.payload.email,
          password: action.payload.password
        }
      }
    default:
      return state;
  }
};

export default reducer;

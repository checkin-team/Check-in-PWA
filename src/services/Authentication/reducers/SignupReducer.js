import ACTION from "../actions/actionTypes"

const initState = {
  askingContact: false,
  askingOTP: false,
  askingDetails: false,
  showLandingPage: true,
  login: {
    isLoggedIn: false
  }
}

export const SignupReducer = (state = initState, action) => {
  switch (action.type) {

    case ACTION.SET_STATE:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

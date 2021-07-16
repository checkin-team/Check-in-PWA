import ACTION from "../actions/actionTypes"

const initState = {
    
}
   

export const MenuReducer = (state = initState, action) => {
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
import ACTION from "../actions/actionTypes"

const initialState = {
  items: {
    isLoading: false,
    data: [],
    error: ""
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION.SET_STATE:
      return { ...state, ...payload }

    case ACTION.ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          data: [...state.items.data, payload]
        }
      }

    case ACTION.REMOVE_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          data: state.items.data.filter(item => item.id !== payload)
        }
      }

    default:
      return state
  }
}

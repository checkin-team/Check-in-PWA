import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const addItem = (payload) => ({
  type: ACTION.ADD_ITEM,
  payload
})

export const removeItem = (payload) => ({
  type: ACTION.REMOVE_ITEM,
  payload
})


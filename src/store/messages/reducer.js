import { SEND_MESSAGE, ADD_MESSAGES } from "./types"

const initialState = {
  messages: {
    room1: [],
    room2: [],
  },
}
console.log(initialState.messages)
console.log({ ...initialState.messages, ...(initialState.messages.room3 = []) })

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            { ...action.payload.message, id: new Date() },
          ],
        },
      }
    case ADD_MESSAGES:
      return {
        ...state.messages,
        ...(state.messages.room3 = action.payload),
      }
    default:
      return state
  }
}

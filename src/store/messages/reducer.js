import { SEND_MESSAGE, GET_MESSAGES } from "./types"

const initialState = {
  messages: {},
}

export const messagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] || []),
            { ...action.payload.message, id: new Date() },
          ],
        },
      }

    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      }

    default:
      return state
  }
}

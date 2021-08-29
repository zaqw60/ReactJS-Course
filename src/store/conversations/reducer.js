import {
  HANDLE_CHANGE_VALUE,
  CLEAR_MESSAGE_VALUE,
  ADD_ROOM,
  REMOVE_CONVERSATION,
  GET_CONVERSATIONS,
} from "./types"

const initialState = {
  conversations: [],
}
const updateConversations = (state, roomId, value) =>
  state.conversations.map((conversation) => {
    return conversation.title === roomId
      ? { ...conversation, value }
      : conversation
  })

const enterName = () => {
  const title = prompt("название чата")
  return { title: `${title}`, value: "" }
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(
          state,
          action.payload.roomId,
          action.payload.value,
        ),
      }
    case CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(state, action.payload, ""),
      }
    case ADD_ROOM:
      return {
        conversations: state.conversations.concat(enterName()),
      }
    case REMOVE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload,
        ),
      }
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload,
      }
    default:
      return state
  }
}

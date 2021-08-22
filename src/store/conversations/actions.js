import {
  HANDLE_CHANGE_VALUE,
  CLEAR_MESSAGE_VALUE,
  ADD_ROOM,
  REMOVE_CONVERSATION,
} from "./types"

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_VALUE,
  payload: { value, roomId },
})

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
})

export const addRoom = (conversation) => ({
  type: ADD_ROOM,
  payload: conversation,
})

export const removeConversation = (title) => ({
  type: REMOVE_CONVERSATION,
  payload: title,
})

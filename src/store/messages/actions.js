import { SEND_MESSAGE, ADD_MESSAGES } from "./types"

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: { delay: 500 },
})

export const addMessages = (room) => ({
  type: ADD_MESSAGES,
  payload: room,
})

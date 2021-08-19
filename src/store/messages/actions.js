import { SEND_MESSAGE, ADD_MESSAGES } from "./types"

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
})

export const addMessages = (room3) => ({
  type: ADD_MESSAGES,
  payload: { room3 },
})

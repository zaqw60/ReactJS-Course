import { clearMessageValue } from "../conversations"
import { sendMessage } from "./actions"
import { GET_MESSAGES } from "./types"

export const sendMessageWithThunk =
  (message, roomId) =>
  async (dispatch, _, { sendMessageApi }) => {
    try {
      await sendMessageApi(roomId, message)

      dispatch(sendMessage(message, roomId))
      dispatch(clearMessageValue(roomId))
    } catch (error) {
      console.log("error", error)
    }
  }

export const getMessagesFB =
  () =>
  async (dispatch, _, { getMessagesApi }) => {
    try {
      await getMessagesApi().then((snapshot) => {
        const messages = {}

        snapshot.forEach((snap) => {
          messages[snap.key] = Object.values(snap.val())
        })
        dispatch({ type: GET_MESSAGES, payload: messages })
      })
    } catch (error) {
      console.log("error", error)
    }
  }

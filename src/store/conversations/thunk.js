import { debounce } from "lodash"
import { handleChangeMessageValue } from "./actions"
import { GET_CONVERSATIONS } from "./types"

export const getConversationsFB =
  () =>
  async (dispatch, _, { getConversationsApi }) => {
    try {
      await getConversationsApi().then((snapshot) => {
        const conversations = []

        snapshot.forEach((snap) => {
          conversations.push(snap.val())
        })
        dispatch({ type: GET_CONVERSATIONS, payload: conversations })
      })
    } catch (error) {
      console.log("error", error)
    }
  }

const cb = debounce(async (handleChangeMessage) => {
  await handleChangeMessage()
}, 500)

export const handleChangeMassageValueFB =
  (messageValue, roomId) =>
  async (dispatch, _, { handleChangeMessageApi }) => {
    await cb(() => handleChangeMessageApi(roomId, messageValue))
    dispatch(handleChangeMessageValue(messageValue, roomId))
  }

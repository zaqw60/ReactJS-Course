import { db } from "../../api/firebase"
import { handleChangeMessageValue } from "./actions"
import { GET_CONVERSATIONS } from "./types"

export const getConversationsFB = () => (dispatch) => {
  db.ref("conversations")
    .get()
    .then((snapshot) => {
      const conversations = []

      snapshot.forEach((snap) => {
        conversations.push(snap.val())
      })
      dispatch({ type: GET_CONVERSATIONS, payload: conversations })
    })
}

export const handleChangeMassageValueFB =
  (messageValue, roomId) => (dispatch) => {
    db.ref("conversations")
      .child(roomId)
      .update({ title: roomId, value: messageValue })
    dispatch(handleChangeMessageValue(messageValue, roomId))
  }

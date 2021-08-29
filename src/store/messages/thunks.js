import { db } from "../../api/firebase"
import { clearMessageValue } from "../conversations"
import { sendMessage } from "./actions"
import { GET_MESSAGES } from "./types"

export const sendMessageWithThunk =
  ({ author, message }, roomId) =>
  (dispatch) => {
    db.ref("messages").child(roomId).push({ author, message })

    dispatch(sendMessage({ author, message }, roomId))
    dispatch(clearMessageValue(roomId))

    //   if (message.author === "User") {
    //     setTimeout(
    //       () =>
    //         dispatch(
    //           sendMessage({ author: "Bot", message: "Hello from thunk" }, roomId),
    //         ),
    //       1500,
    //     )
    //   }
  }

export const getMessagesFB = () => (dispatch) => {
  db.ref("messages")
    .get()
    .then((snapshot) => {
      const messages = {}

      snapshot.forEach((snap) => {
        messages[snap.key] = Object.values(snap.val())
      })
      dispatch({ type: GET_MESSAGES, payload: messages })
    })
}

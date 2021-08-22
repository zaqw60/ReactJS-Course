import { clearMessageValue } from "../conversations"
import { sendMessage } from "./actions"

export const sendMessageWithThunk = (message, roomId) => (dispatch) => {
  dispatch(sendMessage(message, roomId))
  dispatch(clearMessageValue(roomId))
  if (message.author === "User") {
    setTimeout(
      () =>
        dispatch(
          sendMessage({ author: "Bot", message: "Hello from thunk" }, roomId),
        ),
      1500,
    )
  }
}

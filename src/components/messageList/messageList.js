import { Button } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { handleChangeMessageValue } from "../../store/conversations"
import { sendMessageWithThunk } from "../../store/messages"
import { Message } from "./message"

export const MessageList = () => {
  const { roomId } = useParams()
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.messages.messages[roomId] || [])
  const value = useSelector(
    (state) =>
      state.conversations.conversations.find(
        (conversations) => conversations.title === roomId,
      )?.value || "",
  )

  const handleSendMessage = () => {
    if (value) {
      dispatch(sendMessageWithThunk({ author: "User", message: value }, roomId))
    }
  }

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="messageList">
      <div className="messagesRoom">
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>
      <div className="input">
        <TextField
          inputRef={inputRef}
          autoFocus={true}
          id="standard-basic"
          label="Введите сообщение"
          value={value}
          fullWidth={true}
          onChange={(e) =>
            dispatch(handleChangeMessageValue(e.target.value, roomId))
          }
        />
        <Button onClick={handleSendMessage} variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </div>
  )
}

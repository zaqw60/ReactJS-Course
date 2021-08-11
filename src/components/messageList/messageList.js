import { Button } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import { useEffect, useRef } from "react"
import { Message } from "./message"

export const MessageList = ({
  messages,
  value,
  sendMessage,
  handleChangeValue,
}) => {
  const handleSendMessage = () => {
    if (value) {
      sendMessage({ author: "User", message: value })
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
          onChange={handleChangeValue}
        />
        <Button onClick={handleSendMessage} variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </div>
  )
}

import { Button } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import { useState, useEffect, useRef } from "react"

export const MessageList = () => {
  const [messages, setMessages] = useState([])

  const [value, setValue] = useState("")

  const handleSendMessage = () => {
    setMessages((state) => [...state, { value, author: "Nouname" }])
    setValue("")
  }
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    const lastMessage = messages[messages.length - 1]

    if (lastMessage?.author === "Nouname") {
      setMessages((state) => [...state, { value: "Answer", author: "Bot" }])
    }
  }, [messages])

  return (
    <div>
      <div className="messageList">
        <ul>
          {messages.map((message, id) => (
            <li key={id}>
              {message.value} = {message.author}
            </li>
          ))}
        </ul>
      </div>
      <TextField
        inputRef={inputRef}
        autoFocus={true}
        id="standard-basic"
        label="Введите сообщение"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSendMessage} variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

import "./App.css"
import {
  useState,
  useEffect,
  // useCallback,
  // useMemo,
  // useLayoutEffect,
} from "react"
import { Message } from "./Message"

const myMessage = "Hello World!"

export function App() {
  const [messages, setMessages] = useState([])

  const [value, setValue] = useState("")

  const handleSendMessage = () => {
    setMessages((state) => [...state, { value, author: "Nouname" }])
    setValue("")
  }

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]

    if (lastMessage?.author === "Nouname") {
      setMessages((state) => [...state, { value: "Answer", author: "Bot" }])
    }
  }, [messages])

  return (
    <div className="App">
      <header className="App-header">Message</header>
      <Message message={myMessage} />
      <div>
        <form className="messageList">
          <ul>
            {messages.map((message, id) => (
              <li key={id}>
                {message.value} = {message.author}
              </li>
            ))}
          </ul>
        </form>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleSendMessage}>send</button>
      </div>
    </div>
  )
}

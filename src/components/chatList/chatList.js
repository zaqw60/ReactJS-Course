import List from "@material-ui/core/List"
import { memo } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Chat } from "./chat"

export const ChatList = memo(() => {
  const { conversations } = useSelector((state) => state.conversations)
  const { roomId } = useParams()
  return (
    <>
      <List component="nav">
        {conversations.map((chat, index) => {
          return (
            <Chat
              key={index}
              title={chat.title}
              selected={roomId === chat.title}
            />
          )
        })}
      </List>
    </>
  )
})

import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useParams } from "react-router-dom"
import { Chat } from "./chat"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export const ChatList = ({ conversations, allMessages }) => {
  const classes = useStyles()
  const { roomId } = useParams()

  return (
    <div className={classes.root}>
      <List component="nav">
        {conversations.map((chat, index) => {
          const currentMessages = allMessages[chat.title]

          return (
            <Link key={index} to={`/chat/${chat.title}`}>
              <Chat
                title={chat.title}
                selected={roomId === chat.title}
                lastMessage={currentMessages[currentMessages.length - 1]}
              />
            </Link>
          )
        })}
      </List>
    </div>
  )
}

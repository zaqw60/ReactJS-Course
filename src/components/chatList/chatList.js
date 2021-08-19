import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Chat } from "./chat"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export const ChatList = () => {
  const { conversations } = useSelector((state) => state.conversations)
  const classes = useStyles()
  const { roomId } = useParams()
  console.log(conversations)
  return (
    <div className={classes.root}>
      <List component="nav">
        {conversations.map((chat, index) => {
          return (
            <Link key={index} to={`/chat/${chat.title}`}>
              <Chat title={chat.title} selected={roomId === chat.title} />
            </Link>
          )
        })}
      </List>
    </div>
  )
}

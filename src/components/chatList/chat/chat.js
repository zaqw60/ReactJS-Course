import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { useSelector } from "react-redux"

export function Chat({ title, selected }) {
  const messages = useSelector((state) => state.messages.messages[title])

  const lastMessage = messages[messages.length - 1]

  return (
    <>
      <ListItem className="item" button={true} selected={selected}>
        <ListItemText className="text" primary={title} />
        {lastMessage && (
          <ListItemText
            className="text"
            primary={`${lastMessage.author}: ${lastMessage.message}`}
          />
        )}
        <ListItemText className="text" primary="12.30" />
      </ListItem>
      <Divider />
    </>
  )
}

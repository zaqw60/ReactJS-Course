import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import DeleteIcon from "@material-ui/icons/Delete"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeConversation } from "../../../store/conversations"

export function Chat({ title, selected }) {
  const messages = useSelector((state) => state.messages.messages[title] || [])
  const dispatch = useDispatch()
  const lastMessage = messages[messages.length - 1]

  return (
    <>
      <Link to={`/chat/${title}`}>
        <ListItem className="item" button={true} selected={selected}>
          <ListItemText className="text" primary={title} />
          {lastMessage && (
            <ListItemText
              className="text"
              primary={`${lastMessage.author}: ${lastMessage.message}`}
            />
          )}
          <ListItemText className="text" primary="12.30" />
          <IconButton
            onClick={() => dispatch(removeConversation(title))}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>

        <Divider />
      </Link>
    </>
  )
}

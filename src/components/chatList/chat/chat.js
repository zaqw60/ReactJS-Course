import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

export function Chat({ title, selected, handleListItemClick, lastMessage }) {
  return (
    <>
      <ListItem
        className="item"
        button={true}
        selected={selected}
        onClick={handleListItemClick}
      >
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

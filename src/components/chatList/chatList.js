// import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
// import DraftsIcon from "@material-ui/icons/Drafts"
// import InboxIcon from "@material-ui/icons/Inbox"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

function ListItemLink(props) {
  return <ListItem button={true} component="a" {...props} />
}

export const ChatList = () => {
  const classes = useStyles()
  const chats = [
    { name: "chat1", id: "xxx" },
    { name: "chat2", id: "xxx" },
  ]

  return (
    <div className={classes.root}>
      {/* <Divider /> */}
      <List
        className="ChatList"
        component="nav"
        aria-label="secondary mailbox folders"
      >
        <ListItem button={true}>
          <ListItemText primary={chats[0].name} />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary={chats[1].name} />
        </ListItemLink>
      </List>
    </div>
  )
}

import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"
import { addRoom } from "../../store/conversations"
import { addMessages } from "../../store/messages"

export const AddRoom = () => {
  const dispatch = useDispatch()
  const conversation = { title: "room3", value: "ewew" }
  const room3 = []
  return (
    <Button
      className="addRoom"
      variant="contained"
      color="primary"
      onClick={
        (() => dispatch(addMessages(room3)),
        () => dispatch(addRoom(conversation)))
      }

      // onClick={() => dispatch(addRoom(conversation), addMessages(room3))}
    >
      Add Room
    </Button>
  )
}

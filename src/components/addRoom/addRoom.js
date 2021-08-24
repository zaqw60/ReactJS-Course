import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"
import { addRoom } from "../../store/conversations"

export const AddRoom = () => {
  const dispatch = useDispatch()
  return (
    <Button
      className="addRoom"
      variant="contained"
      color="primary"
      onClick={() => dispatch(addRoom())}
    >
      Add Room
    </Button>
  )
}

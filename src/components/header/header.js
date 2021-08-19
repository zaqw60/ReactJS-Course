import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import { useDispatch, useSelector } from "react-redux"
import { nameVisible } from "../../store/profile"
import { AddRoom } from "../addRoom"

export const Header = () => {
  const { firstName } = useSelector((state) => state.profile.user)
  const visible = useSelector((state) => state.profile.visible)

  const dispatch = useDispatch()

  return (
    <>
      <div className="profile">
        <Button
          color="primary"
          className="visible"
          onClick={() => dispatch(nameVisible())}
        >
          Name Visible
        </Button>
        {visible && <h2 className="firstName">{firstName}</h2>}
      </div>
      <div className="roomsRedactor">
        <AddRoom />
        <Button
          variant="contained"
          color="secondary"
          className="deletRoom"
          startIcon={<DeleteIcon />}
        >
          Delete Room
        </Button>
      </div>
    </>
  )
}

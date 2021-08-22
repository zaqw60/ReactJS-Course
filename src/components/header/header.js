import Button from "@material-ui/core/Button"
import { useDispatch, useSelector } from "react-redux"
import { nameVisible } from "../../store/profile"
import { AddRoom } from "../addRoom"
import { Menu } from "./menu"

export const Header = () => {
  const { firstName } = useSelector((state) => state.profile.user)
  const visible = useSelector((state) => state.profile.visible)

  const dispatch = useDispatch()

  return (
    <>
      <div className="header">
        <Menu />
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
        </div>
      </div>
    </>
  )
}

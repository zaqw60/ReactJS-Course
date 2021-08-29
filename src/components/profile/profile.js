import Button from "@material-ui/core/Button"
import { useSelector, useDispatch } from "react-redux"
import { nameVisible } from "../../store/profile"

export const Profile = () => {
  const { firstName } = useSelector((state) => state.profile.user)
  const visible = useSelector((state) => state.profile.visible)
  const dispatch = useDispatch()
  return (
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
  )
}

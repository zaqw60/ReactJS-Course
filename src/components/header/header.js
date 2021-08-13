import { useDispatch, useSelector } from "react-redux"
import { nameVisible } from "../../store/profile"
console.log(nameVisible)

export const Header = () => {
  const { firstName } = useSelector((state) => state.profile.user)
  const visible = useSelector((state) => state.profile.visible)

  const dispatch = useDispatch()

  return (
    <>
      <h2>Header</h2>
      <button className="visible" onClick={() => dispatch(nameVisible())}>
        name visible
      </button>
      {visible && <h2 className="firstName">{firstName}</h2>}
    </>
  )
}

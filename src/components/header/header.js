import Button from "@material-ui/core/Button"
import { firebaseApp } from "../../api/firebase"
import { AddRoom } from "../addRoom"
import { Profile } from "../profile"
import { Menu } from "./menu"

const signOut = () => {
  firebaseApp.auth().signOut()
}

export const Header = ({ session }) => {
  return (
    <>
      <div className="header">
        <Menu />
        <Profile />
        <div className="roomsRedactor">
          <AddRoom />
        </div>
        {session?.email && (
          <Button className="exit" onClick={signOut}>
            Выход({session.email})
          </Button>
        )}
      </div>
    </>
  )
}

import { Link } from "react-router-dom"
import { firebaseApp } from "../api/firebase"
import { Authorization, AuthTemplate } from "../components"

const onSubmit = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
}

export function SignUp() {
  return (
    <AuthTemplate link={<Link to="/login">Вход</Link>}>
      <Authorization
        title="Регистрация"
        submit="Зарегистрироваться"
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  )
}

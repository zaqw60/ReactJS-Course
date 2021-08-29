import { Link } from "react-router-dom"
import { firebaseApp } from "../api/firebase"
import { Authorization, AuthTemplate } from "../components"

const onSubmit = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export function Login() {
  return (
    <AuthTemplate link={<Link to="/sign-up">Регистрация</Link>}>
      <Authorization title="Авторизация" submit="Вход" onSubmit={onSubmit} />
    </AuthTemplate>
  )
}

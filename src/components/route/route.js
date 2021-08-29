import { Redirect, Route } from "react-router-dom"

export function PrivatRoute({ isAuth, ...rest }) {
  return isAuth ? <Route {...rest} /> : <Redirect to="/" />
}

export function PublicRoute({ isAuth, ...rest }) {
  return !isAuth ? <Route {...rest} /> : <Redirect to="/chat" />
}

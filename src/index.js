import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { firebaseApp, db } from "./api/firebase"
import { Header, PrivatRoute, PublicRoute } from "./components"
import { ErrorPage } from "./components/errorPage"
import { Chat, Gist, Login, SignUp } from "./pages"
import { store, persistor } from "./store"

const addConversation = () => {
  db.ref("conversations").child().set({ title: "", value: "" })
}

const createMessage = () => {
  db.ref("messages").child().push({ author: "", message: "" })
}

const App = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    })
  }, [])

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <div className="app">
              {/* <button onClick={addConversation}>addConversation</button>
              <button onClick={createMessage}>createMessage</button> */}
              <Header session={session} />
              <Switch>
                <PrivatRoute isAuth={session} path="/chat" component={Chat} />
                <PrivatRoute isAuth={session} path="/gist" component={Gist} />
                <PublicRoute isAuth={session} path="/login" component={Login} />
                <PublicRoute
                  isAuht={session}
                  path="/sign-up"
                  component={SignUp}
                />
                <Route path="*" component={ErrorPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

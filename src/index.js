import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { Header } from "./components"
import { ErrorPage } from "./components/errorPage"
import { Chat, Gist } from "./pages"
import { store, persistor } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <Switch>
              <Route path="/chat" component={() => <Chat />} />
              <Route path="/gist" component={() => <Gist />} />
              <Route path="*" component={() => <ErrorPage />} />
            </Switch>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat } from "./pages"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/chat" component={() => <Chat />} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)

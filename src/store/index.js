import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { conversationsReducer } from "./conversations"
import { gistsReducer } from "./gists"
import { messagesReducer } from "./messages"
import { report, logger, botSendMessage, timeoutSheduler } from "./middlewares"
import { profileReducer } from "./profile"

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["conversations", "messages"],
}

const persistreduser = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  }),
)

export const store = createStore(
  persistreduser,
  compose(
    applyMiddleware(report, thunk, logger, botSendMessage, timeoutSheduler),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

export const persistor = persistStore(store)

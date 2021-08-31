import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import {
  handleChangeMessageApi,
  getConversationsApi,
} from "../api/conversations"
import { getGistsApi, searchGistsByUserNameApi } from "../api/gists"

import { getMessagesApi, sendMessageApi } from "../api/messages"
import { conversationsReducer } from "./conversations"
import { gistsReducer } from "./gists"
import { messagesReducer } from "./messages"
import { report, logger, botSendMessage, timeoutSheduler } from "./middlewares"
import { profileReducer } from "./profile"

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["conversations", "messages", "gists"],
}

export const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
})

const persistreducer = persistReducer(persistConfig, reducer)

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      report,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByUserNameApi,
        getMessagesApi,
        sendMessageApi,
        handleChangeMessageApi,
        getConversationsApi,
      }),
      logger,
      botSendMessage,
      timeoutSheduler,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
)

export const persistore = persistStore(store)

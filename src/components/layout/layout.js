import "./layout.css"

export function Layout({ header, chats, children }) {
  return (
    <div className="App">
      <div className="header">{header}</div>
      <div className="content">
        <div className="chatList">{chats}</div>
        <div className="messages">{children}</div>
      </div>
    </div>
  )
}

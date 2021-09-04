import "./layout.css"

export function Layout({ chats, children }) {
  return (
    <div className="content">
      <div className="chatList">{chats}</div>
      <div className="messages">{children}</div>
    </div>
  )
}

export function Message({ author, message }) {
  return (
    <div className="messageItem">
      <h3>{message}</h3>
      <p>{author}</p>
      <p>12.03</p>
    </div>
  )
}

import { TextField, Button } from "@material-ui/core"
import { useState } from "react"

export function Authorization({ title, submit, onSubmit }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    try {
      await onSubmit(email, password)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth={true}
        placeholder="Email"
      />

      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth={true}
        placeholder="Password"
        type="password"
      />
      <Button onClick={handleSubmit}>{submit}</Button>
    </div>
  )
}

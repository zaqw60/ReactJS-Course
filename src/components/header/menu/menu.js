import { Link } from "react-router-dom"

const menu = [
  { to: "/", name: "Главная" },
  { to: "/chat", name: "Чат" },
  { to: "/gist", name: "Gist" },
]

export function Menu() {
  return (
    <ul className="menu">
      {menu.map((item) => (
        <li key={item.name}>
          <Link color="inherit" to={item.to}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

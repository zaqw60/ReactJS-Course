import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getGists } from "../store/gists"

const API_URL_PUBLIC = (page) =>
  `http://api.github.com/gists/public?page = ${page}`

const useGists = () => {
  const [gists, setGists] = useState([])
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  const getGists = async (page = 1) => {
    try {
      setPending(true)
      const response = await fetch(API_URL_PUBLIC(page))
      const result = await response.json()

      setGists(result)
    } catch (e) {
      setError(e)
    } finally {
      setPending(false)
    }
  }

  useEffect(() => {
    getGists()
  }, [])

  return { gists, pending, error, getGists }
}

export function Gist() {
  const { gistsPending, gists, gistsError } = useSelector(
    (state) => state.gists,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists())
    }
  }, [dispatch, gists])

  if (gistsPending) {
    return <h1>pending</h1>
  }

  if (gistsError) {
    return <h1>error</h1>
  }

  return (
    <div>
      {/* <button onClick={getGists}>get</button> */}
      {Array.from({ length: 5 }).map((_, index) => (
        <button key={index} onClick={() => dispatch(getGists(index + 1))}>
          button {index + 1}
        </button>
      ))}
      <ul>
        {gists.map((gist, index) => (
          <li key={index}>{gist.description}</li>
        ))}
      </ul>
    </div>
  )
}

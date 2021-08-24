import { gistsStart, gistsSuccess, gistsError } from "./actions"

const API_URL_PUBLIC = (page) =>
  `http://api.github.com/gists/public?page = ${page}`

export const getGists =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(gistsStart())
      const response = await fetch(API_URL_PUBLIC(page))
      const result = await response.json()
      dispatch(gistsSuccess(result))
    } catch (e) {
      dispatch(gistsError(e))
    }
  }

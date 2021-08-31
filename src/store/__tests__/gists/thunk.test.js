import {
  getGists,
  gistsStart,
  gistsSuccess,
  gistsError,
  searchGistsByUserName,
  searchGistsStart,
  searchGistsSuccess,
  searchGistsError,
} from "../../gists"

describe("get gists thunk", () => {
  it("get gists success", async () => {
    const PAGE = 2
    const dispatch = jest.fn()
    const getGistsApi = jest.fn().mockResolvedValue({ data: "ok" })

    const thunk = getGists(PAGE)
    await thunk(dispatch, null, { getGistsApi })

    expect(getGistsApi).toBeCalledTimes(1)
    expect(getGistsApi).toBeCalledWith(PAGE)
    expect(dispatch).toBeCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, gistsStart())
    expect(dispatch).toHaveBeenNthCalledWith(2, gistsSuccess("ok"))
  })

  it("get gists error", async () => {
    const PAGE = 2
    const dispatch = jest.fn()
    const getGistsApi = jest.fn().mockRejectedValue({ error: "error" })

    const thunk = getGists(PAGE)
    await thunk(dispatch, null, { getGistsApi })

    expect(getGistsApi).toBeCalledTimes(1)
    expect(getGistsApi).toBeCalledWith(PAGE)
    expect(dispatch).toBeCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, gistsStart())
    expect(dispatch).toHaveBeenNthCalledWith(2, gistsError({ error: "error" }))
  })
})

describe("search gist thunk", () => {
  it("search gists success", async () => {
    const SEARCH = "test"
    const isCurrentQuery = true

    const dispatch = jest.fn()
    const searchGistsByUserNameApi = jest
      .fn()
      .mockResolvedValue({ data: SEARCH })

    const thunk = searchGistsByUserName(SEARCH, isCurrentQuery)
    await thunk(dispatch, null, { searchGistsByUserNameApi })

    expect(searchGistsByUserNameApi).toBeCalledTimes(1)
    expect(searchGistsByUserNameApi).toBeCalledWith(SEARCH)
    expect(dispatch).toBeCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart())
    expect(dispatch).toHaveBeenNthCalledWith(2, searchGistsSuccess(SEARCH))
  })

  it("search gists error", async () => {
    const SEARCH = "test"
    const isCurrentQuery = true

    const dispatch = jest.fn()
    const searchGistsByUserNameApi = jest
      .fn()
      .mockRejectedValue({ error: "error" })

    const thunk = searchGistsByUserName(SEARCH, isCurrentQuery)
    await thunk(dispatch, null, { searchGistsByUserNameApi })

    expect(searchGistsByUserNameApi).toBeCalledTimes(1)
    expect(searchGistsByUserNameApi).toBeCalledWith(SEARCH)
    expect(dispatch).toBeCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart())
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      searchGistsError({ error: "error" }),
    )
  })
})

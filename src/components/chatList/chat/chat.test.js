import { getByTestId } from "@testing-library/react"
import { renderRedux } from "../../../utils/render-redux"
import { Chat } from "./chat"

let state = null

beforeEach(() => {
  state = {
    messages: {
      messages: { room1: [{ author: "User", message: "Test" }] },
    },
  }
})

describe("chat component", () => {
  it("test render chat", () => {
    const { container } = renderRedux(<Chat title="room1" />, {
      initialState: state,
    })

    const nodes = [...container.querySelectorAll(".text")]

    expect(nodes[0]).toHaveTextContent("room1")
    expect(nodes[1]).toHaveTextContent("User: Test")
  })

  it(" render chat with selected prop", () => {
    const { container } = renderRedux(<Chat title="room1" selected={true} />, {
      initialState: state,
    })

    expect(container.querySelector(".item")).toHaveClass("Mui-selected")
  })

  it("snapshot", () => {
    const { container } = renderRedux(<Chat title="room1" />, {
      initialState: state,
    })
    expect(container).toMatchSnapshot()
  })
})

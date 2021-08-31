import { removeConversation } from "../../conversations"
import { messagesReducer, sendMessage } from "../../messages"
import { GET_MESSAGES } from "../../messages/types"

describe("message reducer", () => {
  it("send message", () => {
    const state = messagesReducer(
      { messages: {} },
      sendMessage({ author: "User", message: "Test" }, "room1"),
    )

    expect(state.messages.room1.length).toBe(1)
    expect(state.messages.room1[0].author).toBe("User")
    expect(state.messages.room1[0]).toHaveProperty("message", "Test")
  })

  it("remove conversation messages", () => {
    const state = messagesReducer(
      { messages: { room1: [], room2: [] } },
      removeConversation("room1"),
    )
    expect(Object.keys(state.messages)).toEqual("room2")
  })

  it("get messages", () => {
    const state = messagesReducer(
      { messages: {} },
      { type: GET_MESSAGES, payload: { room1: [1, 2, 3, 4] } },
    )

    expect(Object.keys(state.messages)).toEqual(["room1"])
    expect(state.messages.room1).toEqual([1, 2, 3, 4])
  })

  it("default messages", () => {
    const state = messagesReducer({
      messages: 1,
    })

    expect(state.messages).toBe(1)
  })
})

import { NAME_VISIBLE } from "./types";

const initialState = {
  visible: true,
  user: {
    id: "test",
    firstName: "user",
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_VISIBLE:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

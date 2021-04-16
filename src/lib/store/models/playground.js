import { createModel } from "@captaincodeman/rdx";

export const playground = createModel({
  state: {
    page: 3
  },
  reducers: {
    switchPage(state, page) {
      return { ...state, page };
    }
  }
});

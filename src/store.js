import { configureStore, createSlice } from "@reduxjs/toolkit";

let conversation = createSlice({
  name: "conversation",
  initialState: [{ role: "assistant", content: "질문을 던지는 assistant" }],
  // reducers: {
  //   addItem(state, action) {
  //     state.push(action.payload);
  //   },
  // },
});

export default configureStore({
  reducer: {
    conversation: conversation.reducer,
  },
});

// export let { addCount, addItem } = cart.actions;

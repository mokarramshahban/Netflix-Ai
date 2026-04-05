import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
  name: "aiSearch",
  initialState: {
    aiSearchView: false,
  },
  reducers: {
    toggleAiSearchView(state, action) {
      state.aiSearchView = !state.aiSearchView;
    },
  },
});

export const { toggleAiSearchView } = aiSearchSlice.actions;
export default aiSearchSlice.reducer;

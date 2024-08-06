import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: 'light', // options: 'light', 'dark', 'blue'
    fontSize: 16, // in pixels
  },
  reducers: {
    setColor(state, action) {
      state.color = action.payload;
    },
    increaseFontSize(state) {
      state.fontSize += 2;
    },
    decreaseFontSize(state) {
      state.fontSize -= 2;
    },
  },
});

export const { setColor, increaseFontSize, decreaseFontSize } = themeSlice.actions;
export default themeSlice.reducer;

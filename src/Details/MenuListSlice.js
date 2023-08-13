import { createSlice } from '@reduxjs/toolkit';

const MenuListSlice = createSlice({
  name: 'menuList',
  initialState: [],
  reducers: {
    // Change the name of the reducer function
    updateSelectedItems: (state, action) => {
      // Update the selected items state with the new array of selected items
      return action.payload;
    },
  },
}); 

// Change the name of the exported action creator
export const { updateSelectedItems } = MenuListSlice.actions;
export default MenuListSlice.reducer;

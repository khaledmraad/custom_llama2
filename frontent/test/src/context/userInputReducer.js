import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInput: [{ id:0, content:" 0 " }]
};
const contentSlice = createSlice({
    name: 'userInput',
    initialState,
    reducers: {
      addItem: (state, action) => {
        const { id, content } = action.payload;
        console.log("the payload");
        console.log(action.payload);
        state.userInput.push({ id:id, content:content });
      },
      removeItem: (state, action) => {
        const itemId = action.payload;
        state.userInput = state.userInput.filter(item => item.id !== itemId);
      }
    }
  });
  
  export const { addItem,removeItem} = contentSlice.actions;
  export default contentSlice.reducer;
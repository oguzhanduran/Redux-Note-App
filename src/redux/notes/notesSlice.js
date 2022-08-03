import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [
          {
            id: 1,
            title: "Wake up Earlier",
            content: "I am going to wake up at six a.m. every day.",
            color: "bgYellow",
          },
          {
            id: 2,
            title: "Read the Book",
            content: "I will re-read my favorite book.",
            color: "bgGreen",
          },
          {
            id: 3,
            title: "Do Exercise ",
            content: "Take a walk for an hour every day",
            color: "bgBlue",
          },
        ],
    activeFilter: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    // editNote: (state, action) => {
    //   const { id } = action.payload;
    //   const item = state.items.find((item) => item.id === id);
    //   alert(item);
    // editNote: (state, action) => {
    //   const itemIndex = state.items.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   state.items[itemIndex] = action.payload;
    //   localStorage.setItem("notes", JSON.stringify(state.items));
    // },
    searchNote: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { addNote, deleteNote, editNote, searchNote } = notesSlice.actions;
export default notesSlice.reducer;

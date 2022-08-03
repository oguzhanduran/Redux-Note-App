import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [
          {
            id: 1,
            title: "Learn React",
            content: "Lorem ipsum dolor sit.",
            color: "bg-light",
          },
          {
            id: 2,
            title: "Read a book",
            content: "Lorem ipsum dolor sit.",
            color: "bg-light",
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
    editNote: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      alert(item);
    },
    searchNote: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { addNote, deleteNote, editNote, searchNote } = notesSlice.actions;
export default notesSlice.reducer;

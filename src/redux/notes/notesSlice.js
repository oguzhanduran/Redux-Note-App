import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("notes") //local storage'da kayıt yapılmışsa onu yükle yoksa varsayılanı yükle dedik.
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
      state.items.push(action.payload); //NoteContent componentimizden gönderilen id, title, content, color verilerini varsayılan items'a push'ladık.
      localStorage.setItem("notes", JSON.stringify(state.items)); // İtems'ın son halini local storage'a kaydettik.
    },

    deleteNote: (state, action) => {
      const id = action.payload; // NoteCard componentimizde bize direk id olarak yollandığı için id olarak alabildik. Diğer türlü {id} şeklinde almamız gerekirdi.
      const filtered = state.items.filter((item) => item.id !== id); // Silinmesi gereken item dışındaki tüm itemları filtreleyerek filtered değişkenine atadık.
      state.items = filtered;
      localStorage.setItem("notes", JSON.stringify(state.items));
    },

    searchNote: (state, action) => {
      state.activeFilter = action.payload; //Search'e girilen her değer activeFilter'e kaydediliyor.
    },
  },
});

export const { addNote, deleteNote, searchNote } = notesSlice.actions;
export default notesSlice.reducer;

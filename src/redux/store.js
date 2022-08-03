import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});

// Burda oluşturduğumuz store dosyamızı index.js dosyamıza import ediyoruz.

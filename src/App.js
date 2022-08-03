import "./App.css";
import Filter from "./components/Filter/Filter";
import NoteContent from "./components/NoteContent/NoteContent";
import Notes from "./components/Notes/Notes";

function App() {
  return (
    <div>
      <NoteContent />
      <Filter />
      <Notes />
    </div>
  );
}

export default App;

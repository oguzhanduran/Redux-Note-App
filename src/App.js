import "./App.css";
import Filter from "./components/Filter/Filter";
import NoteContext from "./components/NoteContext/NoteContext";

function App() {
  return (
    <div>
      <NoteContext />
      <Filter />
    </div>
  );
}

export default App;

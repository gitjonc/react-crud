import "./App.css";
import CharList from "./components/CharacterList";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1>Ironhack Characters REACT API</h1>
      </section>
      <section className="container">
        <section className="form-container"></section>
        <CharList />
      </section>
    </div>
  );
}

export default App;

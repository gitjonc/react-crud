import "./App.css";
import CharList from "./components/CharacterList";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1>Ironhack Characters API</h1>
        <div className="characters-container">
          <div className="character-info">
            <div className="name">Character Name</div>
            <div className="occupation">Character Occupation</div>
            <div className="cartoon">Is a Cartoon?</div>
            <div className="weapon">Character Weapon</div>
          </div>
        </div>
        <section className="operations">
          <div className="operation">
            <button id="fetch-all">Fetch all</button>
          </div>
          <div className="operation">
            <label htmlFor="character-id">Search by ID: </label>
            <input type="text" name="character-id"></input>
            <button id="fetch-one">Fetch one</button>
          </div>
          <div className="operation delete">
            <label htmlFor="character-id-delete">Delete by ID: </label>
            <input type="text" name="character-id-delete"></input>
            <button id="delete-one">Delete one</button>
          </div>
        </section>
      </section>
      <section className="container">
        <section className="form-container">
          <h2>New Character</h2>
          <form id="new-character-form" className="character-form">
            <div className="field">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name"></input>
            </div>
            <div className="field">
              <label htmlFor="occupation">Occupation: </label>
              <input type="text" name="occupation"></input>
            </div>
            <div className="field">
              <label htmlFor="weapon">Weapon: </label>
              <input type="text" name="weapon"></input>
            </div>
            <div className="field">
              <label htmlFor="cartoon">Is a Cartoon: </label>
              <input name="cartoon" type="checkbox"></input>
            </div>
            <button id="send-data">Create</button>
          </form>
        </section>
        <section className="form-container">
          <h2>Edit Character</h2>
          <form id="edit-character-form" className="character-form">
            <div className="field">
              <label htmlFor="id">ID: </label>
              <input type="text" name="chr-id"></input>
            </div>
            <div className="field">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name"></input>
            </div>
            <div className="field">
              <label htmlFor="occupation">Occupation: </label>
              <input type="text" name="occupation"></input>
            </div>
            <div className="field">
              <label htmlFor="weapon">Weapon: </label>
              <input type="text" name="weapon"></input>
            </div>
            <div className="field">
              <label htmlFor="cartoon">Is a Cartoon: </label>
              <input name="cartoon" type="checkbox"></input>
            </div>
            <button id="send-data">Update</button>
          </form>
        </section>
        <CharList />
      </section>
      <script
        type="text/javascript"
        src="./public/javascript/APIHandler.js"
      ></script>
      <script
        type="text/javascript"
        src="./public/javascript/index.js"
      ></script>
    </div>
  );
}

export default App;

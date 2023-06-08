import axios from "axios";
import { useEffect, useState } from "react";
import Character from "./Character";

const FAKE_API_URL = "http://localhost:8000/characters";

function CharList() {
  const [char, setChar] = useState([]);
  const [data, setData] = useState({
    name: "",
    occupation: "",
    weapon: "",
    cartoon: false,
  });

  const getData = async () => {
    try {
      const response = await axios.get(FAKE_API_URL);
      setChar(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const displayChar = () => {
    return char.map((character) => (
      <div className="container" key={character.id}>
        <div className="character-container">
          <Character
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            {...character}
          />
        </div>
      </div>
    ));
  };

  const cleanInputs = () => {
    setData({
      name: "",
      occupation: "",
      weapon: "",
      cartoon: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(FAKE_API_URL, data);
      getData();
      cleanInputs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${FAKE_API_URL}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, data) => {
    try {
      await axios.put(`${FAKE_API_URL}/${id}`, data);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const { name, occupation, weapon, cartoon } = data;
  return (
    <>
      <section className="form-container">
        <h2>New Character</h2>
        <form
          className="character-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="field">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="occupation">Occupation: </label>
            <input
              type="text"
              name="occupation"
              value={data.occupation}
              onChange={handleChange}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="weapon">Weapon: </label>
            <input
              type="text"
              name="weapon"
              value={data.weapon}
              onChange={handleChange}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="cartoon">Is a Cartoon: </label>
            <select
              required
              type="text"
              name="cartoon"
              value={data.cartoon}
              onChange={handleChange}
            >
              <option hidden>--Choose an option--</option>
              <option>False</option>
              <option>True</option>
            </select>
          </div>
          <button type="submit">Create</button>
        </form>
      </section>
      {char.length ? displayChar() : <p>No quedan personajes en la BBDD</p>}
    </>
  );
}

export default CharList;

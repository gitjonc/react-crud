import axios from "axios";
import { useEffect, useState } from "react";
import Character from "./Character";

const API_URL = "http://localhost:8000/characters";

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
      const response = await axios.get(API_URL);
      setChar(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const displayChar = () => {
    return char.map((character) => (
      <div className="container">
        <div className="character-container">
          <Character
            key={character.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            {...character}
          />
        </div>
      </div>
    ));
  };

  // const cleanInputs = () => {
  //   setName (""),
  //   setOccupation (""),
  //   setWeapon (""),
  //   setCartoon (false)
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, data);
      getData();
      // cleanInputs();
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
      await axios.delete(`${API_URL}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, data) => {
    try {
      await axios.put(`${API_URL}/${id}`, char);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const { name, occupation, weapon, cartoon } = data;

  return (
    <>
      <h1>Characters:</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="occupation"
          value={occupation}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="weapon"
          value={weapon}
          onChange={handleChange}
        ></input>
        <select
          type="text"
          name="cartoon"
          value={cartoon}
          onChange={handleChange}
        >
          <option>True</option>
          <option>False</option>
        </select>
        <button type="submit">Crear</button>
      </form>
      {char.length ? displayChar() : <p>No quedan personajes</p>}
    </>
  );
}

export default CharList;

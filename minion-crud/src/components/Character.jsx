import { useState } from "react";

const API_URL = "http://localhost:8000/characters";

function Character({
  id,
  name,
  occupation,
  weapon,
  cartoon,
  handleEdit,
  handleDelete,
}) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({
    name: "",
    occupation: "",
    weapon: "",
    cartoon: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleEdit(id, data);
    setEditing(false);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);

  return (
    <div>
      {editing ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="occupation"
            value={data.occupation}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="weapon"
            value={data.weapon}
            onChange={handleChange}
          ></input>
          <select
            type="text"
            name="cartoon"
            value={data.cartoon}
            onChange={handleChange}
          >
            <option value={cartoon} onChange={handleChange}>
              True
            </option>
            <option value={cartoon} onChange={handleChange}>
              False
            </option>
          </select>
          <button type="submit">Editar</button>
        </form>
      ) : (
        <div className="character-info">
          <p className="name">
            <b>Name:</b> {name}
          </p>
          <p className="occupation">
            <b>Occupation:</b> {occupation}
          </p>
          <p className="weapon">
            <b>Weapon:</b> {weapon}
          </p>
          <p className="cartoon">
            <b>Is Cartoon?</b> {cartoon}
          </p>
        </div>
      )}
      <button onClick={() => setEditing(!editing)}>✏️</button>
      <button onClick={() => handleDelete(id)}>bin</button>
    </div>
  );
}

export default Character;

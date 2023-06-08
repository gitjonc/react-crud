import { useState } from "react";

function Sentence(apichar) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({
    apichar,
  });
  console.log(apichar);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="sentence">
      <input
        hidden
        className="inputazo"
        type="text"
        name="name"
        value={apichar.apichar}
        // onChange={handleChange}
      ></input>
      <button type="submit" className="edit">
        Editar
      </button>
    </div>
  );
}

export default Sentence;

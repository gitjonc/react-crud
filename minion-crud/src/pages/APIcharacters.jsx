import axios from "axios";
import { useState, useEffect } from "react";
import Sentence from "../components/Sentence";
const chuckImg =
  "https://m.media-amazon.com/images/I/91PKSufW2GL._AC_UF1000,1000_QL80_.jpg";

const API_URL = "https://api.chucknorris.io/jokes/random";
const API_CAT = "https://api.chucknorris.io/jokes/categories";
const API_CAT_JOKE = "https://api.chucknorris.io/jokes/random?category=";

function APIChar() {
  const [APIChar, setAPIChar] = useState([]);
  const [APIdata, setAPIdata] = useState([]);

  const getAPIData = async () => {
    try {
      const response = await axios.get(API_URL);
      setAPIChar(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  const getAPIcat = async () => {
    try {
      const response = await axios.get(API_CAT);
      //   setAPIChar(response.data.value);
      setAPIdata(response.data);
      console.log("EEEEEE", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getApiCatJoke = async (cat) => {
    try {
      const response = await axios.get(API_CAT_JOKE + cat);
      //   setAPIChar(response.data.value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPIData();
    getAPIcat();
  }, []);

  return (
    <div className="chuck">
      <Sentence apichar={APIChar} />
      <p className="norris">{APIChar}</p>
      <button onClick={getAPIData}>OTRA</button>
      {/* <select className="chuckSelect">
        {APIdata.map((cat) => {
          return <option value={cat}>{cat}</option>;
        })}
      </select> */}
      <img src={chuckImg} alt="Chuk Norris wins" className="chuckFit" />
    </div>
  );
}

export default APIChar;

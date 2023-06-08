import { Link } from "react-router-dom";

const charImg =
  "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/04/12/16497656011831.jpg";

export default function HomePage() {
  return (
    <div className="homePage">
      <h1>Home</h1>
      <h4>The best lists of characters ever!</h4>
      <img src={charImg} alt="ain't it?" className="homeImg" />
      <Link to="/characters">
        <button className="centerButton">Come and check it!</button>
      </Link>
    </div>
  );
}

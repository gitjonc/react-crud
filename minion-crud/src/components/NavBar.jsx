import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/chuck">Chuck</Link>
      </ul>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import logo from "../img/logo_branco.png";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

export default function Header() {
  const { loggedInUser, logoff } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="headerBg"></div>
      <Link className="nav-link active" aria-current="page" to="/">
        <img src={logo} alt="logo" style={{ height: "90px" }} />
      </Link>
      {loggedInUser.user._id ? (
        <>
          <Link
            className="nav-link"
            to="#"
            tabindex="-1"
            aria-disabled="true"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={logoff}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            className="nav-link"
            to="#"
            tabindex="-1"
            aria-disabled="true"
            style={{ color: "white", textDecoration: "none" }}
          >
            Login
          </Link>
        </>
      )}
      ;
    </div>
  );
}

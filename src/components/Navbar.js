import {NavLink} from "react-router-dom";
import cog from "../images/cog-icon.png";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
  <div className="container-fluid">
    <div className="logo">Bacchus</div>


    <div id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <NavLink to="settings">
            <img src={cog} alt="cog" className="avatar dropdown-toggle"/>
          </NavLink>
          </li>
      </ul>
    </div>
  </div>
</div>
  )
}

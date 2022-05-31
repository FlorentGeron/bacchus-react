import { NavLink } from "react-router-dom";
import search from "../images/search.png";
import bottle from "../images/bottle.png";
import box from "../images/box.png";
import wineglass from "../images/wine-glass.png";
import graphbar from "../images/graph-bar.png";

export default function BottomNavbar() {
  return (
    <div className="bottom-bar d-flex flex-row justify-content-center px-3">
     <NavLink to="/" className="icon-link-navbar">
      <img src={search} alt="search" className="icon-link"/>
      <p className="picture-caption">Accueil</p>
     </NavLink>
     <NavLink to="extracted" className="icon-link-navbar">
      <img src={bottle} alt="bottle" className="icon-link"/>
      <p className="picture-caption">Mises de Côté</p>
     </NavLink>
     <NavLink to="add" className="icon-link-navbar">
      <img src={box} alt="box" className="icon-link"/>
      <p className="picture-caption">Ajouter</p>
     </NavLink>
     <NavLink to="degustations" className="icon-link-navbar">
      <img src={wineglass} alt="glass" className="icon-link"/>
      <p className="picture-caption">Dégustations</p>
     </NavLink>
     <NavLink to="metrics" className="icon-link-navbar">
      <img src={graphbar} alt="graph" className="icon-link"/>
      <p className="picture-caption">Statistiques</p>
     </NavLink>
    </div>
  )
}

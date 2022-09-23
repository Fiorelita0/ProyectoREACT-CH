import React from "react";
import "./NavBar.css";
import nuevologo from "../logo.png";
import usuario from "../usuario.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-rojo display-flex">
          <div className="display-flex">
            <Link className="navbar-brand" to="/">
                <img
                  className="navbar-logo"
                  src={nuevologo}
                  alt="Logo del petshop"
                />
            </Link>
            <div
              className="collapse navbar-collapse display-flex text-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav navbar-items">
                <Link className="nav-item nav-link" to="/categoria/secos">Secos</Link>
                <Link  className="nav-item nav-link" to="/categoria/humedos">Humedos</Link>
                <Link  className="nav-item nav-link" to="/categoria/snacks">Snacks</Link>
                <Link  className="nav-item nav-link" to="/categoria/ayuda">Ayuda</Link>
              </div>
              <img
                className="navbar-usuario"
                src={usuario}
                alt="Logo de usuario"
              />
              <CartWidget />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;

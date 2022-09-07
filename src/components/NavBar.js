import nuevologo from "../logo.png";
import usuario from "../usuario.png";

function NavBar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-rojo display-flex">
        <div className="display-flex">
          <a className="navbar-brand" href="index.html">
            <img
              className="navbar-logo"
              src={nuevologo}
              alt="Logo del petshop"
            />
          </a>
          <div className="collapse navbar-collapse display-flex text-center" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-items">
              <a className="nav-item nav-link" href="mascotas.html">
                Mascotas<span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="marcas.html">
                Marcas
              </a>
              <a className="nav-item nav-link" href="sucursales.html">
                Sucursales
              </a>
              <a className="nav-item nav-link" href="ayuda.html">
                Ayuda
              </a>
            </div>
            <img
              className="navbar-usuario"
              src={usuario}
              alt="Logo de usuario"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;

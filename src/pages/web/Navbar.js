import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/logo_transparente.png";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="nav-web">
      <Link to="/">
        <img src={logo} className="logo-web" alt="logo" />
      </Link>
      <div className="links-web">
        <Link className="link-item-web" to="/">
          Inicio
        </Link>
        <Link className="link-item-web" to="/">
          Nosotros
        </Link>
        <Link className="link-item-web" to="/">
          Clientes
        </Link>
        <Link className="link-item-web" to="/">
          Servicios
        </Link>
        <Link className="link-item-web" to="/">
          Recordatorios
        </Link>
        <Link className="link-item-web" to="/">
          Archivos
        </Link>
        <Link className="link-item-web" to="/">
          Contacto
        </Link>
      </div>
      <div class="btn-actions-web">
        <Button
          onclick={() => {
            window.location.href = "/#/admin/dashboard";
          }}
          w="100px"
          h="30px"
          bl="linear-gradient(to right, hsl(130, 82%, 31%) ,hsl(158, 94%, 37%))"
          text={"Login"}
          fnt="14px"
        />
        <Button
          onclick={() => {
            window.location.href = "/#/admin/dashboard";
          }}
          w="130px"
          h="30px"
          bl="linear-gradient(to right, hsl(26, 100%, 64%) ,hsl(26, 100%, 46%))"
          ml="15px"
          text={"Registrarse"}
          fnt="14px"
        />
      </div>
    </nav>
  );
}
export default Navbar;

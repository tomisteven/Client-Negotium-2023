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

        <Link style={{
          backgroundColor: "#99b4ff",
          color: "#000",
          borderRadius: "5px",
          padding: "5px",
          fontWeight: "bold",
          fontSize: "15px",
          marginLeft: "10px",
          marginRight: "10px",
          fontFamily: "Arial",
        }} className="link-item-web" to="/login/client">
          Login Clientes
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
          mr="15px"
        />
        <Button
          onclick={() => {
            window.location.href = "/#/admin/dashboard";
          }}
          w="130px"
          h="30px"
          bl="linear-gradient(to right, hsl(26, 100%, 64%) ,hsl(26, 100%, 46%))"
          ml="25px"
          text={"Registrarse"}
          fnt="14px"
        />
      </div>
    </nav>
  );
}
export default Navbar;

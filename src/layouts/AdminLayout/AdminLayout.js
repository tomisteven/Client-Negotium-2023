import React, { useState, Suspense, lazy } from "react";
import "./AdminLayout.scss";
import "./AdminLayout.css";
import { useAuth } from "../../hooks/useAuth";
import { AdminProfile } from "../../Components/Admin/AdminLayout/AdminProfile/AdminProfile";
import Logo from "../../assets/Negotium Assets/logoN.webp";
import { Logout } from "../../Components/Admin/AdminLayout/Logout";
import { Icon, Button } from "semantic-ui-react";

const Component_Menu_left = lazy(() =>
  import("../../Components/Admin/AdminLayout/AdminMenu/AdminMenu")
);
export function AdminLayout(props) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const { children } = props;

  const color = ["#021027ba", "#F0F3F4"];

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div className="admin-layout">
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="admin-layout__left">
          <img className="logo" src={Logo} alt="logo" />
          <Component_Menu_left onLoad={handleLoading} />
          <Logout logout={logout} onLoad={handleLoading} />
        </div>
        <div
          className="admin-layout__right"
          style={{
            backgroundColor: user.obscuro ? color[0] : color[1],
          }}
        >
          <div className="admin-layout__right-header">
            <AdminProfile />
          </div>
          <div className="admin-layout__right-content">{children}</div>
        </div>
        <button
          onClick={() => {
            document
              .querySelector(".menu-expandible")
              .classList.toggle("active");
          }}
          className="btn-info-sticky"
        >
          <Icon name="question" />
        </button>
        <div className="menu-expandible">
          <div className="menu-expandible__content">
            <img className="menu-expandible-avatar" src={user.avatar} alt="" />
            <h1 className="menu-expandible-h1">
              {user.name} {user.lastname}
            </h1>
            <p className="menu-expandible-p">
              Este es un panel de administración para el sitio web de negocios.
              Aquí podrás realizar las siguientes acciones:
            </p>

            <Button className="menu-expandible-button" color="green">
              <a href="#/admin/clientes">Administrar Clientes</a>
            </Button>
            <Button className="menu-expandible-button" color="blue">
              <a href="#/admin/servicios">Administrar Servicios</a>
            </Button>
            <Button className="menu-expandible-button" color="orange">
              <a href="#/admin/recordatorios">Recordatorios</a>
            </Button>
            <p className="menu-expandible-p">Y mas...</p>

            <p className="menu-expandible-p-2">
              Para más información sobre el funcionamiento de cada sección, Si
              tienes alguna duda, puedes contactar al desarrollador del sitio
              web con el mail <span>digitalcodeoficial@gmail.com</span>
            </p>

            <Button
              onClick={() => {
                document
                  .querySelector(".menu-expandible")
                  .classList.toggle("active");
              }}
              color="red"
              circular
              className="menu-expandible-close"
              icon={"close"}
            />
          </div>
        </div>

      </Suspense>
    </div>
  );
}



 {/* */}
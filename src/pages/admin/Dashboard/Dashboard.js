import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useAuth } from "../../../hooks";
import NewItemDash from "./Components/NewItemDash";
import img_view from "../../../assets/Negotium Assets/see.webp";
import avatarM from "../../../assets/Negotium Assets/perfil.webp";
import avatarF from "../../../assets/Negotium Assets/mujer.webp";
import sinclientes from "../../../assets/Negotium Assets/add.webp";
import img_pendiente from "../../../assets/Negotium Assets/exclamation.webp";
import img_prioridad from "../../../assets/Negotium Assets/priority.webp";
import img_alert from "../../../assets/Negotium Assets/senal-de-alerta.webp";
import img_baja from "../../../assets/Negotium Assets/baja.webp";
import img_sin_recordatorios from "../../../assets/Negotium Assets/comprobado.webp";
import clients from "../../../assets/Negotium Assets/new-item-clients.png";
import services from "../../../assets/Negotium Assets/new-item-ervices.png";
import files from "../../../assets/Negotium Assets/new-item-files.png";
import alert from "../../../assets/Negotium Assets/new-item-alert.png";
import turnos from "../../../assets/Negotium Assets/new-item-turnos.png";

import { ListClients } from "./Components/ListClients";
import { ListRecordatorios } from "./Components/ListRecordatorios";
import { ServiceItem } from "./Components/ServicesItem";
import { User, Client } from "../../../api";

import { SearchRecordatorios } from "../../../Components/Admin/AdminLayout/SearchAddRecordatorios";
import Loading from "../../../Components/Admin/Loader/Loading";

const userController = new User();
const clientController = new Client();
export function Dashboard() {
  const { user, accesToken } = useAuth();
  const color = ["#010409", "#F0F3F4"];
  const [reload, setReload] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [userActive, setUserActive] = React.useState(user);
  const [turnsAll, setTurnsAll] = React.useState([]);

  const membresia_active = userActive.membresias.find((m) => m.activa === true);

  //console.log(user);

  if (!user) {
    console.log("no hay usuario, redireccionando a login");
    window.location.href = "/auth";
  }

  const onReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await userController.getMe(accesToken);
      const response2 = await clientController.getAllServices(accesToken);
      setTurnsAll(response2);
      setUserActive(response);
      makeAColor();
      setLoading(false);
    })();
  }, [reload]);

  if (!userActive || loading) {
    return <Loading text="Cargando Dashboard..." obscuro={user.obscuro} />;
  }

  const makeAColor = () => {
    const colors = [
      "#AED9E0",
      "#D4E4C1",
      "#E8D6B9",
      "#B9E8D6",
      "#D9C9E0",
      "#C1D9E4",
      "#E0AEC2",
      "#C2E0AE",
    ];

    while (userActive.servicios.length > colors.length) {
      let red, green, blue;
      do {
        // Genera un valor aleatorio para cada componente RGB
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);

        // Verifica que el color no sea oscuro o gris
      } while (red < 102 || green < 91 || blue < 127);

      // Calcula el promedio de los componentes RGB para obtener un tono pastel
      const averageColor = (red + green + blue) / 3;

      // Calcula el valor de desplazamiento para aclarar el color
      const offset = Math.floor(Math.random() * 51) + 204;

      // Aplica el valor de desplazamiento a cada componente RGB
      red = Math.floor((red + offset + averageColor) / 3);
      green = Math.floor((green + offset + averageColor) / 3);
      blue = Math.floor((blue + offset + averageColor) / 3);

      colors.push(
        `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
      );
    }
    return colors;
  };

  console.log(turnsAll
    .filter((turn) => turn.date > Date.now().toString()).length
    );

  return (
    <>
      <SearchRecordatorios onReload={onReload} />
      <div className="dashboard-panel">
        <NewItemDash
          value={user.clientes.length + " / " + membresia_active.clientes_max}
          img={clients}
          title={"Total Clientes"}
          color="#6789e6"
        />
        <NewItemDash
          value={user.servicios.length + " / " + membresia_active.servicios_max}
          img={services}
          title={"Servicios"}
          color="#ac58ed"
        />
        <NewItemDash
          value={user.pdfs.length + " / " + membresia_active.archivos_max}
          img={files}
          title={"Archivos"}
          color={"#e89746"}
        />
        <NewItemDash
          value={
            user.recordatorios.length +
            " / " +
            membresia_active.recordatorios_max
          }
          img={alert}
          title={"Recordatorios"}
          color={"#c2bf70"}
        />
        <NewItemDash
          img={turnos}
          value={turnsAll.filter((turn) => turn.date > Date.now().toString()).length}
          title={"Turnos Completados"}
          color={"#3dbf3d"}
        />
        <NewItemDash
          img={turnos}
          value={
            turnsAll.filter((turn) => turn.date < Date.now().toString()).length
          }
          title={"Turnos Pendientes"}
          color={"#d45353"}
        />
      </div>
      <div className="dashboard-v2">
        <ListClients
          obscuro={user.obscuro}
          onReload={onReload}
          sinclientes={sinclientes}
          avatarM={avatarM}
          avatarF={avatarF}
          clients={userActive.clientes || []}
          token={accesToken}
        />
        <ListRecordatorios
          obscuro={user.obscuro}
          recordatorios={userActive.recordatorios}
          img_alert={img_alert}
          img_pendiente={img_pendiente}
          sinrecordatorios={img_sin_recordatorios}
          img_baja={img_baja}
          img_prioridad={img_prioridad}
          img_see={img_view}
          onReload={onReload}
          token={accesToken}
        />
      </div>
      <div className="dashboard-services">
        {user.servicios.length > 0 ? (
          userActive.servicios.map((item, index) => {
            return (
              <ServiceItem
                colors={color}
                onReload={onReload}
                key={index}
                item={item}
                number={index}
                backgroundProps={makeAColor()}
              />
            );
          })
        ) : (
          <div className="cont-sin-servicios">
            <h3 className="text-sin-servicios">No tienes servicios</h3>
          </div>
        )}
      </div>
    </>
  );
}

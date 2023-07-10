import React from "react";
import "./StayProductive.css";
import { Link } from "react-router-dom";
import img_productive from "./images/illustration-stay-productive.png";
import img_arrow from "./images/icon-arrow.svg";

function StayProductive() {
  return (
    <div className="contanier-web">
      <div className="stayProductive-web">
        <div className="stay-l-web">
          <img src={img_productive} alt="illustration-stay-productive" />
        </div>
        <div className="stay-r-web">
          <h1>Se productivo con estas funciones</h1>
          <p>
            <span>Agregar clientes: </span> Registra nuevos clientes en tu base
            de datos.
          </p>
          <p>
            <span>Editar clientes:</span> Actualiza la información y detalles de
            tus clientes.
          </p>
          <p>
            <span>Eliminar clientes:</span> Elimina clientes de tu lista cuando
            sea necesario.
          </p>
          <p>
            <span>Ver información detallada:</span> Accede a los detalles
            completos de cada cliente.
          </p>
          <p>
            <span>Gestionar deudas:</span> Registra y controla las deudas
            asociadas a tus clientes.
          </p>
          <p>
            <span>Gestionar servicios:</span> Administra los servicios que
            ofreces a tus clientes.
          </p>
          <p>
            <span>Ver historial:</span> Accede al historial completo de
            interacciones con cada cliente.
          </p>
          <p>
            <span>Programar Turnos:</span> Programa y organiza los próximos
            turnos a atender.
          </p>
          <p>
            <span>Guardar archivos:</span> Almacena y organiza facturas,
            resúmenes, comprobantes y otros documentos.
          </p>
          <p>
            <span>Agregar recordatorios:</span> Guarda notas y recordatorios
            importantes relacionados con tu negocio.
          </p>
        </div>
      </div>
    </div>
  );
}
export default StayProductive;

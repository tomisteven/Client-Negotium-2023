import React from "react";
import "./Features.css";
import Feature from "./Feature";
import img1 from "./images/icon-access-anywhere.svg";
import img2 from "./images/crisis.png";
import img3 from "./images/icon-collaboration.svg";
import img4 from "./images/icon-any-file.svg";

function Features() {
  return (
    <div className="features-web">
      <div className="contanier-web">
        <div className="features-flex-web">
          <Feature
            img={img3}
            head="Administra tus clientes"
            text="En la sección de clientes, podrás agregar, editar y eliminar clientes, así como visualizar su información detallada y gestionar sus deudas y servicios relacionados."
          />
          <Feature
            img={img2}
            head="ALertas y Recordatorios"
            text="En la sección de alertas y recordatorios, mantén todo bajo control. Configura recordatorios, guarda notas y marca tareas como completadas o pendientes, asegurándote de no perder ningún detalle importante en la gestión diaria de tu negocio. Mantén el flujo de trabajo eficiente y sin contratiempos."
          />
        </div>
        <div className="features-flex-web mob-marg">
          <Feature
            img={img1}
            head="Agrega Servicios"
            text="En la sección de servicios, podrás personalizar y gestionar tus ofertas, estableciendo precios, habilitando o deshabilitando opciones según tus necesidades. De esta manera, podrás brindar a tus clientes una experiencia excepcional y adaptada a sus preferencias y requerimientos individuales."
          />
          <Feature
            img={img4}
            head="Guarda tus Comprobantes y Archivos"
            text="En la sección de almacenamiento de archivos, podrás guardar y organizar documentos importantes como facturas, resúmenes, comprobantes, imágenes y archivos PDF. Mantén todos tus registros y documentos clave fácilmente accesibles y seguros en nuestro sistema."
          />
        </div>
      </div>
    </div>
  );
}
export default Features;

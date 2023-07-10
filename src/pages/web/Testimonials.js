import React from "react";
import "./Testimonials.css";
import Testimonial from "./Testimonial";
import img_planfree from "./images/planfree.png";
import img_planestandart from "./images/planestandart.png";
import img_planpremium from "./images/planpremium.png";

function Testimonials() {
  const planfree = [
    { text: "12 Clientes", value: true },
    { text: "7 Servicios", value: true },
    { text: "5 Archivos", value: true },
    { text: "10 Recordatorios", value: true },
    { text: "Soporte 24/7", value: false },
    { text: "Login de Clientes", value: false },
    { text: "Portal de Publicaciones", value: false },
  ];
  const planestandart = [
    { text: "20 Clientes", value: true },
    { text: "14 Servicios", value: true },
    { text: "12 Archivos", value: true },
    { text: "20 Recordatorios", value: true },
    { text: "Soporte 24/7", value: true },
    { text: "Login de Clientes", value: false },
    { text: "Portal de Publicaciones", value: false },
  ];
  const planpremium = [
    { text: "30 Clientes / Extendible", value: true },
    { text: "20 Servicios / Extendible", value: true },
    { text: "20 Archivos / Extendible", value: true },
    { text: "40 Recordatorios / Extendible", value: true },
    { text: "Soporte 24/7", value: true },
    { text: "Login de Clientes", value: true },
    { text: "Portal de Publicaciones", value: true },
    { text: "Boton de Redireccion de W app", value: true },
  ];

  return (
    <div className="contanier-web">
        <div className="title-web">
            <h1>Planes</h1>
        </div>
      <div className="testimonials-web">
        <Testimonial auth={planfree} price={0} img={img_planfree} title={"Plan Free"} />
        <Testimonial
          img={img_planestandart}
          auth={planestandart}
          price={350}
          title={"Plan Estándar"}
        />
        <Testimonial
          img={img_planpremium}
            price={700}
          auth={planpremium}
          title={"Plan Premium"}
        />
      </div>
    </div>
  );
}
export default Testimonials;

import React from "react";
import "./Testimonial.css";
import { Icon } from "semantic-ui-react";
import Button from "./Button";

function Testimonial({ text, img, auth = [], job, title, price }) {
  console.log(auth);
  return (
    <div className="testimonial">
      <div class="header-testimonial">
        <img className="img-header-testimonial" src={img} alt="auther" />
        <h3>{title} </h3>
        <span>${price}</span>
      </div>
      <div className="auth-container">
        {auth.map((auth, index) => (
          <div class="body-auth">
            <Icon
              name={auth.value ? "check" : "close"}
              color={auth.value ? "green" : "red"}
            />
            <h6>{auth.text}</h6>
          </div>
        ))}
      </div>
      <Button
        text={"Adquirir"}
        h={"30px"}
        w={"170px"}
        fnt={"15px"}
        ml={"75px"}
        mr={"15px"}
        mt={"25px"}
      />
    </div>
  );
}
export default Testimonial;

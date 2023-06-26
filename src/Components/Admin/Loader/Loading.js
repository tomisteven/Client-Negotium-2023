import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { RotatingTriangles } from "react-loader-spinner";


export default function Loading({ obscuro, text }) {
  return (
    <div className="conteiner-files">
      <Dimmer active inverted>
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
        </Dimmer>
    </div>
  );
}



/* <Dimmer
        style={{
          backgroundColor: obscuro ? "#424E5E" : "#ffffff",
        }}
        active
        inverted
      >
        <Loader style={{
            color: obscuro ? "#ffffff" : "#000000",
        }} inverted>{text}</Loader>
      </Dimmer> */
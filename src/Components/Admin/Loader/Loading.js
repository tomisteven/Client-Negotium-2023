import React from "react";
import { Dimmer} from "semantic-ui-react";
import { RotatingTriangles } from "react-loader-spinner";


export default function Loading({ obscuro, text }) {
  return (
    <div className="conteiner-files-v2">
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


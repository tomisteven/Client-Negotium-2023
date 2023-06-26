import React from "react";
import "./itemFile.css";
import { Button } from "semantic-ui-react";
import pdf_icon from "../../../../assets/Negotium Assets/pdf_icon.webp";
import img_icon from "../../../../assets/Negotium Assets/img.webp";
export default function ItemFile({ file, downdoaldFile, deleteFile }) {
  return (
    <div class="cont_file_item" key={file._id}>
      <div class="cont_header">
        <div class="cont_header_cont_info">
          <p class="cont_header_cont_info_servicio">
            {file.servicio.toUpperCase()}
          </p>
          <p
            class="cont_header_cont_info_title"
            style={file.nombre.length > 15 ? { fontSize: "10px" } : {}}
          >
            {file.nombre}
          </p>
        </div>
        <div class="cont_header_cont_img">
          <img
            class="cont_header_cont_img_img"
            src={file.tipo == "IMG" ? img_icon : pdf_icon}
            alt=""
          />
        </div>
      </div>
      <div class="cont_description_body">
        <p class="cont_description_body_p">{file.fecha}</p>
        <p class="cont_description_body_p">{file.descripcion}</p>
      </div>
      <div class="cont_footer_actions">
        <Button
          size="mini"
          icon="eye"
          color="purple"
          onClick={() => {
            window.open(file.url, "_blank");
          }}
        ></Button>
        <Button
          size="mini"
          icon="download"
          disabled={
            window.innerWidth < 768 ? true : false
          }
          color="green"
          onClick={
            () => {downdoaldFile(file.url, file.nombre)}
          }
        ></Button>

        <Button
          icon="trash alternate outline"
          size="mini"
          color="red"
          onClick={() => {
            deleteFile(file._id);
          }}
        />
      </div>
    </div>
  );
}

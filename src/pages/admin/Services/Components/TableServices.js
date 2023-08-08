import React from "react";
import { Button, Image, Modal, Table, Dropdown } from "semantic-ui-react";
import inactive from "../../../../assets/Negotium Assets/inactive.webp";
import active from "../../../../assets/Negotium Assets/active.webp";
import ModalEditService from "./ModalEditService";
import { Services } from "../../../../api/service";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import sweetAlert from "sweetalert2";
import add_service from "../../../../assets/Negotium Assets/add.webp";

const serviceController = new Services();
export default function TableServices({
  services,
  onReload,
  setLoad,
  sinServices,
  setServices,
}) {
  const { accesToken } = useAuth();
  const [service, setService] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const editService = (service) => {
    setService(service);
    setOpen(true);
  };

  const activeService = async (id) => {
    const response = await serviceController.toggleService(id, accesToken);
    if (response) {
      toast.success("Servicio actualizado correctamente");
      setTimeout(() => {
        setLoad(false);
        setOpen(false);
        onReload();
      }, 1500);
    }
  };

  const deleteService = async (id) => {
    sweetAlert
      .fire({
        title: "¿Estas seguro de eliminar este servicio?",
        text: "No podras revertir esta accion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const response = await serviceController.deleteService(
            id,
            accesToken
          );
          if (response) {
            toast.success("Servicio eliminado correctamente");
            setTimeout(() => {
              onReload();
            }, 1500);
          }
        }
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr
            style={{
              color: "#000000",
            }}
          >
            <th> Estado </th>
            <th> Nombre </th>
            <th> Descripcion</th>
            <th> Vendidos </th>
            <th> Precio </th>
            <th> Acciones </th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            services.map((service, index) => {
              return (
                <tr
                  style={{
                    color: "#000000",
                  }}
                >
                  <td
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {"  "}
                    <img src={service.habilitado ? active : inactive} alt="" />
                  </td>
                  <td> {service.nombre}</td>
                  <td> {service.descripcion} </td>
                  <td>
                    <p class="status delivered">{service.cantidadVendidos}</p>
                  </td>
                  <td>
                    <p
                      style={{
                        fontWeight: "bold",
                        padding: "10px",
                      }}
                      class="status delivered"
                    >
                      ${service.precio}
                    </p>
                  </td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "3px",
                      height: "100%",
                    }}
                  >
                    {window.innerWidth > 768 ? (
                      <>
                        <Button
                          size="mini"
                          color={service.habilitado ? "orange" : "green"}
                          onClick={() => {
                            setLoad(true);
                            activeService(service._id);
                          }}
                        >
                          {service.habilitado ? "Deshabilitar" : "Habilitar"}
                        </Button>
                        <Button
                          size="mini"
                          primary
                          onClick={() => editService(service)}
                          className="btn-see"
                        >
                          Editar
                        </Button>
                        <Button
                          size="mini"
                          color="red"
                          onClick={() => deleteService(service._id)}
                        >
                          Eliminar
                        </Button>
                      </>
                    ) : (
                      <Dropdown
                        className="drop-td"
                        icon={
                          <Button
                            primary
                            size="tiny"
                            icon={"bars"}
                            class="btn btn-edit"
                          />
                        }
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item text="New">
                            <Button
                              onClick={() => {
                                setLoad(true);
                                activeService(service._id);
                              }}
                              content={
                                service.habilitado
                                  ? "Deshabilitar"
                                  : "Habilitar"
                              }
                              size="mini"
                              color={service.habilitado ? "orange" : "green"}
                            />
                          </Dropdown.Item>
                          <Dropdown.Item text="New">
                            <Button
                              onClick={() => editService(service)}
                              content="Editar"
                              size="mini"
                              color="blue"
                            />
                          </Dropdown.Item>
                          <Dropdown.Item text="New">
                            <Button
                              size="mini"
                              color="youtube"
                              onClick={() => deleteService(service._id)}
                              className="btn-delete"
                            >
                              Eliminar
                            </Button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="no-clientes-table">
              <h3>No se encontraron Servicios agregados</h3>
              <img className="img_sin_clientes" src={add_service} alt="" />
            </div>
          )}
        </tbody>
      </table>

      <ModalEditService
        service={service}
        open={open}
        onReload={onReload}
        setOpen={setOpen}
      />
      <ToastContainer />
    </div>
  );
}

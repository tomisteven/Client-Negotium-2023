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
  const { accesToken, user } = useAuth();
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
          {services.map((service, index) => {
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
                              service.habilitado ? "Deshabilitar" : "Habilitar"
                            }
                            size="mini"
                            color="green"
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
          })}
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

/* <Table
        basic="very"
        selectable
        compact
        padded
        structured
        className="table-services"
        style={{ backgroundColor: user.obscuro ? "#355175" : "#F0F3F4" }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
            >
              Estado
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
            >
              Nombre
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
            >
              Descripcion
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
            >
              Vendidos
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
            >
              Precio
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
            >
              Acciones
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {services.length > 0 ? (
            services.map((service) => (
              <Table.Row
                key={service._id}
                style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
              >
                <Table.Cell>
                  <Image
                    centered
                    src={service.habilitado ? active : inactive}
                    size="mini"
                  />
                </Table.Cell>
                <Table.Cell
                  style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
                  className="text-items-table-services-bold"
                >
                  {service.nombre}
                </Table.Cell>
                <Table.Cell
                  style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
                  className="text-items-table-services"
                >
                  {service.descripcion}
                </Table.Cell>
                <Table.Cell
                  style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
                  className="text-items-table-services"
                >
                  {service.cantidadVendidos}
                </Table.Cell>
                <Table.Cell
                  style={{ color: user.obscuro ? "#ffffff" : "#000000" }}
                  className="text-items-table-services-bold"
                >
                  ${service.precio}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color={service.habilitado ? "orange" : "green"}
                    size="mini"
                    onClick={() => {
                      setLoad(true);
                      activeService(service._id);
                    }}
                  >
                    {service.habilitado ? "Desactivar" : "Activar"}
                  </Button>
                  <Button
                    color="blue"
                    size="mini"
                    onClick={() => editService(service)}
                  >
                    Editar
                  </Button>
                  <Button
                    color="red"
                    size="mini"
                    onClick={() => deleteService(service._id)}
                  >
                    Eliminar
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <div className="cont-sin-services">
              <h2>No hay servicios</h2>
              <img className="img_sin_services" src={add_service} alt="" />
            </div>
          )}
        </Table.Body>
      </Table> */
/* <table>
          <thead>
            <tr>
              <th className="th-nombres"> Nº </th>
              <th> Nombres </th>
              <th> Email </th>
              <th> Telefono</th>
              <th> Gasto </th>
              <th> Deuda </th>
              <th> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr>
                <td>{index + 1}</td>
                <td
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {"  "}
                  <img
                    src={client.genero === "Femenino" ? avatarF : avatarM}
                    alt=""
                  />
                  {client.nombre} {client.apellido}{" "}
                </td>
                <td> {client.email}</td>
                <td> {client.telefono} </td>
                <td>
                  <p class="status delivered">${client.gastoTotal}</p>
                </td>
                <td>
                  <p
                    class="status delivered"
                    style={
                      client.deudaTotal > 0
                        ? {
                            backgroundColor: "#d893a3",
                            color: "#fff",
                          }
                        : {
                            fontWeight: "bold",
                          }
                    }
                  >
                    ${client.deudaTotal}
                  </p>
                </td>
                <td>
                  {window.innerWidth > 768 ? (
                    <>
                      <Button
                        size="mini"
                        color="green"
                        onClick={() => {
                          viewClientInModal(client);
                        }}
                      >
                        Ver
                      </Button>
                      <Button
                        size="mini"
                        primary
                        onClick={() => {
                          editCreateClient(client);
                        }}
                        className="btn-see"
                      >
                        Editar
                      </Button>
                      <Button
                        onClick={() => {
                          viewModalService(client, false);
                        }}
                        size="mini"
                        color="orange"
                        className="btn-delete"
                      >
                        + Servicio
                      </Button>
                      <Button
                        onClick={() => {
                          viewModalService(client, true);
                        }}
                        size="mini"
                        color="instagram"
                        className="btn-delete"
                      >
                        + Servicio Futuro
                      </Button>
                      <Button
                        size="mini"
                        color="purple"
                        onClick={() => {
                          viewModalAnularDeuda(client);
                        }}
                      >
                        Editar Deuda
                      </Button>
                      <Button
                        size="mini"
                        color="youtube"
                        onClick={() => {
                          deleteClient(client);
                        }}
                        className="btn-delete"
                      >
                        Eliminar
                      </Button>
                      <Button icon="print" size="mini" color="blue" />
                      <Button icon="whatsapp" size="mini" color="green" />
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
                            size="mini"
                            color="green"
                            onClick={() => {
                              viewClientInModal(client);
                            }}
                          >
                            Ver
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item text="New">
                          <Button
                            size="mini"
                            primary
                            onClick={() => {
                              editCreateClient(client);
                            }}
                            className="btn-see"
                          >
                            Editar
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item text="New">
                          <Button
                            onClick={() => {
                              viewModalService(client, false);
                            }}
                            size="mini"
                            color="orange"
                            className="btn-delete"
                          >
                            + Servicio
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item text="New">
                          <Button
                            onClick={() => {
                              viewModalService(client, true);
                            }}
                            size="mini"
                            color="instagram"
                            className="btn-delete"
                          >
                            + Servicio Futuro
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item text="New">
                          <Button
                            size="mini"
                            color="purple"
                            onClick={() => {
                              viewModalAnularDeuda(client);
                            }}
                          >
                            Editar Deuda
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item text="New">
                          <Button
                            size="mini"
                            color="youtube"
                            onClick={() => {
                              deleteClient(client);
                            }}
                            className="btn-delete"
                          >
                            Eliminar
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item text="New">
                          <Button icon="print" size="mini" color="blue" />
                        </Dropdown.Item>
                        <Dropdown.Item text="New">
                          <Button icon="whatsapp" size="mini" color="green" />
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table> */

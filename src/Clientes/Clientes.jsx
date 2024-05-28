import React, { useEffect, useState } from 'react';
import { Menu } from '../Menu/Menu';
import './clientes.css';
import axios from 'axios';
import { Tabla } from '../Tabla/Tabla';
import Swal from 'sweetalert2';

export const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  const agregarCliente = (cliente) => {
    axios.post("http://localhost:8080/clientes/agregar", cliente)
      .then(() => {
        window.location.href = "/clientes";
      })
      .catch(() => alert("Cliente no inactivado"));
  }

  const inactivarCliente = (inactivarCliente) => {
    Swal.fire({
      title: "Advertencia",
      text: "¿Quiere inactivar este cliente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.isConfirmed){
        inactivarCliente.estado = "inactivo";
        agregarCliente(inactivarCliente);
      }
    })
  }

  useEffect(() => {
    const cargarClientes = () => {
      axios.get("http://localhost:8080/clientes?estado=activo")
        .then(({ data }) => setClientes(data));
    }

    cargarClientes();
  }, []);

  return (
    <>
      <Menu />
      <div className="contenedor-info">
        <h2 className='titulo'>Clientes</h2>
        <div className="opciones">
          <a href="/crear-cliente" className='crear-cliente'>
            <i className='bx bxs-user-plus'></i>
            Crear nuevo cliente
          </a>
          <a href="/activar-cliente" className='activar-cliente'>
            <i className='bx bxs-user-check'></i>
            Activar cliente
          </a>
        </div>

        {/* <table className='tabla'>
          <thead>
            <tr>
              <th>No. documento</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Ciudad</th>
              <th>País</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.numeroDocumento}</td>
                <td>{cliente.nombre + ' ' + cliente.apellido}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.ciudad}</td>
                <td>{cliente.pais}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correo}</td>
                <td>
                  <a href={`/editar-cliente/${cliente.id}`} className='edit' title='Editar'>
                    <i className='bx bxs-edit'></i>
                  </a>
                  <button onClick={() => inactivarCliente(cliente)} className='inactivar' title='Inactivar'>
                    <i className='bx bxs-trash-alt'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <Tabla clientes={clientes} inactivarCliente={inactivarCliente} />
      </div>
    </>
  )
}



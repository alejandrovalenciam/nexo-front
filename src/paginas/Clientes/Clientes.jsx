import React, { useEffect, useState } from 'react';
import { Menu } from '../../componentes/Menu/Menu';
import './clientes.css';
import axios from 'axios';
import { Tabla } from '../../componentes/Tabla/Tabla';
import Swal from 'sweetalert2';
import { BotonExportar } from '../../componentes/Exportar/BotonExportar';

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
      if (result.isConfirmed) {
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

          <BotonExportar datos={clientes} nombre={"clientes"} />
        </div>

        <Tabla clientes={clientes} inactivarCliente={inactivarCliente} />
      </div>
    </>
  )
}



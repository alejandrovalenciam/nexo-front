import React, { useEffect, useState } from 'react'
import { Menu } from '../Menu/Menu'
import { Tabla } from '../Tabla/Tabla'
import axios from 'axios'
import Swal from 'sweetalert2'

export const ClientesInactivos = () => {
    const [clientes, setClientes] = useState([]);

    const agregarCliente = (cliente) => {
        axios.post("http://localhost:8080/clientes/agregar", cliente)
            .then(() => {
                window.location.href = "/clientes";
            })
            .catch(() => alert("Cliente no activado"));
    }

    const activarCliente = (activarCliente) => {
        Swal.fire({
            title: "Advertencia",
            text: "¿Quiere activar este cliente?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar"
        }).then(result => {
            if (result.isConfirmed){
                activarCliente.estado = "activo";
              agregarCliente(activarCliente);
            }
        })
    }

    useEffect(() => {
        const cargarClientes = () => {
            axios.get("http://localhost:8080/clientes?estado=inactivo")
                .then(({ data }) => setClientes(data));
        }

        cargarClientes();
    }, []);
    return (
        <>
            <Menu />

            <div className="contenedor-info">
                <h2 className='titulo'>Clientes inactivos</h2>
                <Tabla clientes={clientes} activarCliente={activarCliente}/>
            </div>
        </>
    )
}

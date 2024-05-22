import React, { useEffect, useState } from 'react'
import { Menu } from '../Menu/Menu'
import { Encabezado } from '../Encabezado/Encabezado'
import { Tabla } from '../Tabla/Tabla'
import axios from 'axios'

export const ClientesInactivos = () => {
    const [clientes, setClientes] = useState([]);

    const agregarCliente = (cliente) => {
        axios.post("http://localhost:8080/clientes/agregar", cliente)
            .then(() => {
                alert("Cliente activado");
                window.location.href = "/clientes";
            })
            .catch(() => alert("Cliente no activado"));
    }

    const activarCliente = (activarCliente) => {
        const activar = window.confirm("¿Quiere activar este cliente?");

        if (activar) {
            activarCliente.estado = "activo"
            agregarCliente(activarCliente);
        }
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
            <Encabezado />

            <div className="contenedor-info">
                <Tabla clientes={clientes} activarCliente={activarCliente}/>
            </div>
        </>
    )
}

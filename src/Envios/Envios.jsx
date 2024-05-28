import React, { useEffect, useState } from 'react'
import './envios.css'
import { Menu } from '../Menu/Menu'
import axios from 'axios'

export const Envios = () => {
    const [envios, setEnvios] = useState([]);

    useEffect(() => {
        const cargarEnvios = () => {
            axios.get("http://localhost:8080/envios/")
            .then(({ data }) => setEnvios(data));
        }
        cargarEnvios();
    }, []);

    return (
        <>
            <Menu />
            <div className='contenedor-envio'>
                <h2 className='titulo'>Envios</h2>
                <a href="/crear-envio" className='crear-envio'>
                    <i className='bx bxs-box'></i>
                    Crear nuevo envio
                </a>
                <table className='tabla'>
                    <thead>
                        <tr>
                            <th>Fecha de envio</th>
                            <th>Fecha de entrega</th>
                            <th>Tipo de envío</th>
                            <th>Estado</th>
                            <th>Detalles</th>
                            <th>Dirección</th>
                            <th>Ciudad</th>
                            <th>Cliente</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {envios.map(envio => (
                            <tr key={envio.id}>
                                <td>{envio.fechaEnvio}</td>
                                <td>{envio.fechaEntrega}</td>
                                <td>{envio.tipoEnvio}</td>
                                <td>{envio.estado}</td>
                                <td>{envio.detalles}</td>
                                <td>{envio.direccion}</td>
                                <td>{envio.destino}</td>
                                <td>{envio.idCliente.nombre + ' ' + envio.idCliente.apellido}</td>
                                <td>
                                    <a href={`/editar-envio/${envio.id}`} className='edit' title='Editar'>
                                        <i className='bx bxs-edit'></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

import React from 'react'
import './tabla.css'

export const Tabla = ({ clientes, inactivarCliente, activarCliente }) => {

    return (
        <>
            <table id='tablaClientes' className='tabla'>
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
                                {(cliente.estado === "activo") ?
                                    <>
                                        <a href={`/editar-cliente/${cliente.id}`} className='edit' title='Editar'>
                                            <i className='bx bxs-edit'></i>
                                        </a>
                                        <a onClick={() => inactivarCliente(cliente)} className='inactivar' title='Inactivar'>
                                            <i className='bx bxs-trash-alt'></i>
                                        </a>
                                    </>
                                    :
                                    <button onClick={() => activarCliente(cliente)} className='activar'>activar</button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </>
    )
}

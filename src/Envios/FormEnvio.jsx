import React, { useEffect, useState } from 'react'
import { Menu } from '../Menu/Menu'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export const FormEnvio = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [clientes, setClientes] = useState([]);
    const [envio, setEnvio] = useState({
        fechaEnvio: "",
        tipoEnvio: "",
        estado: "",
        fechaEntrega: "",
        detalles: "",
        direccion: "",
        destino: "",
        idCliente: ""
    });

    useEffect(() => {
        const cargarClientes = () => {
            axios.get("http://localhost:8080/clientes?estado=activo")
            .then(({ data }) => setClientes(data));
        }
        cargarClientes();

        const buscarEnvio =  () => {
            axios.get(`http://localhost:8080/envios/${id}`)
            .then(({data}) => setEnvio(data))
            .catch(() => console.log("envio no encontrado"));
        }
        if(id !== undefined){
            buscarEnvio();
        }
    }, [id]);

    const agregarEnvio = (envio) => {
        axios.post("http://localhost:8080/envios/agregar", envio)
        .then(() => {
            Swal.fire("Éxito", "Envío guardado", "success");
            navigate("/envios");
        })
        .catch((err) => alert("Envio no guardado",err.message));
    }

    return (
        <>
            <Menu />

            <div className="contenedor-form">
                <h2 className='titulo'>{id ? 'Editar' : 'Crear'} cliente</h2>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        fechaEnvio: envio.fechaEnvio,
                        tipoEnvio: envio.tipoEnvio,
                        estado: envio.estado,
                        fechaEntrega: envio.fechaEntrega,
                        detalles: envio.detalles,
                        direccion: envio.direccion,
                        destino: envio.destino,
                        idCliente: envio.idCliente.id
                    }}

                    validate={(valores) => {
                        let errores = {};

                        if (!valores.fechaEnvio) {
                            errores.fechaEnvio = "Por favor ingrese la fecha de envío";
                        }

                        if (!valores.tipoEnvio) {
                            errores.tipoEnvio = "Por favor ingrese el tipo de envío";
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.tipoEnvio)) {
                            errores.tipoEnvio = "Tipo de envío no válido";
                        }

                        if (!valores.estado) {
                            errores.estado = "Por favor ingrese el estado";
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.estado)) {
                            errores.estado = "Estado no válido";
                        }

                        if (!valores.fechaEntrega) {
                            errores.fechaEntrega = "Por favor ingrese la fecha de entrega";
                        }

                        if (!valores.detalles) {
                            errores.detalles = "Por favor ingrese una descripción";
                        }

                        if (!valores.direccion) {
                            errores.direccion = "Por favor ingrese una dirección";
                        }

                        if (!valores.destino) {
                            errores.destino = "Por favor ingrese su ciudad de residencia";
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.destino)) {
                            errores.destino = "Ciudad no válida";
                        }

                        if (!valores.idCliente) {
                            errores.idCliente = "Elija un cliente";
                        }

                        return errores;
                    }}

                    onSubmit={(info, { resetForm }) => {
                        const nuevoEnvio = {
                            id: id,
                            fechaEnvio: info.fechaEnvio,
                            tipoEnvio: info.tipoEnvio,
                            estado: info.estado,
                            fechaEntrega: info.fechaEntrega,
                            detalles: info.detalles,
                            direccion: info.direccion,
                            destino: info.destino,
                            idCliente: {id: info.idCliente}
                        }
                        agregarEnvio(nuevoEnvio);
                        resetForm();
                    }}
                >
                    {({ errors }) => (
                        <Form className='form-cliente'>
                            <div className="input-group">
                                <label htmlFor="fechaEnvio">Fecha de envío:</label>
                                <Field
                                    type="date"
                                    id='fechaEnvio'
                                    name='fechaEnvio'
                                />
                                <ErrorMessage name='fechaEnvio' component={() => (
                                    <div className='error'>{errors.fechaEnvio}</div>
                                )} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="fechaEntrega">Fecha de entrega:</label>
                                <Field
                                    type="date"
                                    id='fechaEntrega'
                                    name='fechaEntrega'
                                />
                                <ErrorMessage name='fechaEntrega' component={() => (
                                    <div className='error'>{errors.fechaEntrega}</div>
                                )} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="tipoEnvio">Tipo de envío:</label>
                                <Field
                                    type="text"
                                    id='tipoEnvio'
                                    name='tipoEnvio'
                                />
                                <ErrorMessage name='tipoEnvio' component={() => (
                                    <div className='error'>{errors.tipoEnvio}</div>
                                )} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="estado">Estado:</label>
                                <Field
                                    type="text"
                                    id='estado'
                                    name='estado'
                                />
                                <ErrorMessage name='estado' component={() => (
                                    <div className='error'>{errors.estado}</div>
                                )} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="detalles">Detalles:</label>
                                <Field
                                    type="text"
                                    id='detalles'
                                    name='detalles'
                                />
                                <ErrorMessage name='detalles' component={() => (
                                    <div className='error'>{errors.detalles}</div>
                                )} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="direccion">Dirección de destino:</label>
                                <Field
                                    type="text"
                                    id='direccion'
                                    name='direccion'
                                />
                                <ErrorMessage name='direccion' component={() => (
                                    <div className='error'>{errors.direccion}</div>
                                )} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="destino">Ciudad de destino:</label>
                                <Field
                                    type="text"
                                    id='destino'
                                    name='destino'
                                />
                                <ErrorMessage name='destino' component={() => (
                                    <div className='error'>{errors.destino}</div>
                                )} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="idCliente">Cliente:</label>
                                <Field id='idCliente' name='idCliente' as='select' className="cliente-envio">
                                    {(id===undefined) ? 
                                        <option>Seleccione</option>
                                    :  
                                        <option value={envio.idCliente.id}>
                                            {envio.idCliente.nombre+' '+envio.idCliente.apellido}
                                        </option>
                                    }
                                    
                                    
                                    {clientes.map(cliente => (
                                        <option 
                                            key={cliente.id}
                                            value={cliente.id}>{cliente.nombre+' '+cliente.apellido}
                                        </option>
                                    ))}
                                </Field>


                                <ErrorMessage name='idCliente' component={() => (
                                    <div className='error'>{errors.idCliente}</div>
                                )} />
                            </div>
                            <div className='contenedor-btn'>
                                <button type='submit' className='btn-enviar'>Enviar</button>
                            </div>
                        </Form>

                    )}
                </Formik>

            </div>
        </>

    )
}

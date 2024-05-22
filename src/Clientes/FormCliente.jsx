import React, { useEffect, useState } from 'react';
import { Menu } from '../Menu/Menu';
import { Encabezado } from '../Encabezado/Encabezado';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './formCliente.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const FormCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    numeroDocumento: "",
    nombre: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    pais: "",
    telefono: "",
    correo: "",
    estado: ""
  });
  

  const agregarCliente = (cliente) => {
    axios.post("http://localhost:8080/clientes/agregar", cliente)
    .then(() => {
      alert("Cliente guardado");
      window.location.href = "/clientes";
    })
    .catch(() => alert("Cliente no guardado"));
  }
  
  useEffect(() => {
    const buscarCliente =  () => {
      axios.get(`http://localhost:8080/clientes/${id}`)
      .then(({data}) => setCliente(data))
      .catch(() => console.log("cliente no encontrado"));
    }
    if(id !== undefined){
      buscarCliente();
    }
  },[id])
  
  
  return (
    <>
      <Menu />
      <Encabezado />

      <div className="contenedor-form">
        <Formik 
          enableReinitialize={true}
          initialValues={{
            id: id,
            numeroDocumento: cliente.numeroDocumento,
            nombre:  cliente.nombre,
            apellido: cliente.apellido,
            direccion: cliente.direccion,
            ciudad: cliente.ciudad,
            pais: cliente.pais,
            telefono: cliente.telefono,
            correo: cliente.correo,
          }}

          validate={(valores) => {
            let errores = {};

            if(!valores.numeroDocumento){
              errores.numeroDocumento = "Por favor ingrese el número de documento";
            }else if(!/^\d+$/.test(valores.numeroDocumento)){
              errores.numeroDocumento = "Número de documento no válido";
            }else if(valores.numeroDocumento.length < 8 || valores.numeroDocumento.length > 11){
              errores.numeroDocumento = "Longitud de número no válida";
            }

            if(!valores.nombre){
              errores.nombre = "Por favor ingrese su nombre";
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
              errores.nombre = "Nombre no válido";
            }

            if(!valores.apellido){
              errores.apellido = "Por favor ingrese su apellido";
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
              errores.apellido = "Apellido no válido";
            }

            if(!valores.direccion){
              errores.direccion = "Por favor ingrese su dirección de residencia";
            }

            if(!valores.ciudad){
              errores.ciudad = "Por favor ingrese su ciudad de residencia";
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.ciudad)){
              errores.ciudad = "Ciudad no válida";
            }

            if(!valores.pais){
              errores.pais = "Por favor ingrese su pais de residencia";
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.pais)){
              errores.pais = "País no válido";
            }

            if(!valores.telefono){
              errores.telefono = "Por favor ingrese su teléfono";
            }else if(!/^\d+$/.test(valores.telefono)){
              errores.telefono = "Teléfono no válido";
            }

            if(!valores.correo){
              errores.correo = "Por favor ingrese su correo";
            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
              errores.correo = "Correo no válido";
            }

            return errores;
          }}

          onSubmit={(info, {resetForm}) => {
            const cliente = {
              id: info.id,
              numeroDocumento: info.numeroDocumento,
              nombre: info.nombre,
              apellido: info.apellido,
              direccion: info.direccion,
              ciudad: info.ciudad,
              pais: info.pais,
              telefono: info.telefono,
              correo: info.correo,
              estado: "activo"
            }
            agregarCliente(cliente);
            resetForm();
          }}
        >
          {( {errors} ) => (
            <Form className='form-cliente'>
              <div className="input-group">
                <label htmlFor="numDoc">Número de documento:</label>
                <Field
                  type="text"
                  id='numDoc'
                  name='numeroDocumento'
                  maxLength="11"
                />
                <ErrorMessage name='numeroDocumento' component={() => (
                  <div className='error'>{errors.numeroDocumento}</div>
                )} />
              </div>

              <div className="input-group">
                <label htmlFor="nombre">Nombre:</label>
                <Field
                  type="text"
                  id='nombre'
                  name='nombre'
                />
                <ErrorMessage name='nombre' component={() => (
                  <div className='error'>{errors.nombre}</div>
                )} />
              </div>

              <div className="input-group">
                <label htmlFor="apellido">Apellido:</label>
                <Field
                  type="text"
                  id='apellido'
                  name='apellido'
                />
                <ErrorMessage name='apellido' component={() => (
                  <div className='error'>{errors.apellido}</div>
                )} />
              </div>

              <div className="input-group">
                <label htmlFor="direccion">Dirección:</label>
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
                <label htmlFor="ciudad">Ciudad:</label>
                <Field
                  type="text"
                  id='ciudad'
                  name='ciudad'
                />
                <ErrorMessage name='ciudad' component={() => (
                  <div className='error'>{errors.ciudad}</div>
                )} />
              </div>

              <div className="input-group">
                <label htmlFor="pais">País:</label>
                <Field
                  type="text"
                  id='pais'
                  name='pais'
                />
                <ErrorMessage name='pais' component={() => (
                  <div className='error'>{errors.pais}</div>
                )} />
              </div>

              <div className="input-group">
                <label htmlFor="telefono">Teléfono:</label>
                <Field
                  type="text"
                  id='telefono'
                  name='telefono'
                />
                <ErrorMessage name='telefono' component={() => (
                  <div className='error'>{errors.telefono}</div>
                )} />
              </div>

              <div className="input-group">
                <label htmlFor="correo">Correo:</label>
                <Field
                  type="email"
                  id='correo'
                  name='correo'
                />
                <ErrorMessage name='correo' component={() => (
                  <div className='error'>{errors.correo}</div>
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

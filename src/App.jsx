import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Dashboard } from './Dashboard/Dashboard'
import { Clientes } from './Clientes/Clientes';
import { FormCliente } from './Clientes/FormCliente';
import { ClientesInactivos } from './Clientes/ClientesInactivos';
import { Envios } from './Envios/Envios';
import { FormEnvio } from './Envios/FormEnvio';
import { Registro } from './Registro/Registro';
import { Home } from './Home/Home';

export const App = () => {

  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/crear-cliente' element={<FormCliente />} />
        <Route path='/editar-cliente/:id' element={<FormCliente />} />
        <Route path='/activar-cliente' element={<ClientesInactivos />}/>
        <Route path='/envios' element={<Envios />} />
        <Route path='/crear-envio' element={<FormEnvio />} />
        <Route path='/editar-envio/:id' element={<FormEnvio />} />
    </Routes>
  )
}

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './paginas/Login/Login';
import { Dashboard } from './paginas/Dashboard/Dashboard'
import { Clientes } from './paginas/Clientes/Clientes';
import { FormCliente } from './componentes/FormCliente/FormCliente';
import { ClientesInactivos } from './paginas/ClientesInactivos/ClientesInactivos';
import { Envios } from './paginas/Envios/Envios';
import { FormEnvio } from './componentes/FormEnvios/FormEnvio';
import { Registro } from './paginas/Registro/Registro';
import { Home } from './paginas/Home/Home';

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

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import appFirebase from '../firebaseConfig';
import Swal from 'sweetalert2';

export const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await appFirebase.auth().createUserWithEmailAndPassword(correo, clave);
            if(user){
                Swal.fire("", "Usuario registrado", "success");
                navigate("/")
            }
        } catch (error) {
            Swal.fire("", "Ya existe un usuario con ese correo", "error");
        }
    }

    return (
        <div className="fondo">
            <div className='contenedor'>
                <div className="logo">
                    <i className='bx bxs-user-circle icon'></i>
                </div>
                <form className='formulario' onSubmit={handleSubmit}>
                    <h1>Registro</h1>

                    <div className="input-group">
                        <i class='bx bxs-user'></i>
                        <input
                            type="text"
                            placeholder='Nombre'
                        />
                    </div>

                    <div className="input-group">
                        <i className='bx bxs-envelope'></i>
                        <input
                            type="email"
                            placeholder='Correo'
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <i className='bx bxs-lock'></i>
                        <input
                            type="password"
                            placeholder='Contraseña'
                            onChange={(e) => setClave(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <input type="submit" value="Registrarse" />
                    </div>

                    <a href="/">Iniciar sesión</a>
                </form>
            </div>
        </div>
    )
}

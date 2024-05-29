import './login.css'
import logo from '../img/logo.png';
import { useState } from 'react';
import appFirebase from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await appFirebase.auth().signInWithEmailAndPassword(correo, clave);
            if(user){
                navigate("/clientes")
            }
        } catch (error) {
            alert("Tu email o contraseña son incorrectos vuelve a intentarlo")
        }
    }

    return (
        <div className="fondo">
            <div className='contenedor'>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <form className='formulario' onSubmit={handleSubmit}>
                    <h1>Inicio de sesión</h1>

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
                        <input type="submit" value="Ingresar" />
                    </div>

                    <a href="/registro">Crear una cuenta</a>
                </form>
            </div>
        </div>
    )
}

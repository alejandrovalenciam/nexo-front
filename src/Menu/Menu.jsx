import { Link } from 'react-router-dom'
import './menu.css'

export const Menu = () => {
    return (
        <div className="barra-lateral">
            <div className="nombre-pagina">
                <i id="cloud" className='bx bxs-cloud' ></i>
                <span>NexoCRM</span>
            </div>
            <div className="navegacion">
                <ul>
                    <li>
                        <Link to="" className='enlaces'>
                            <i className='bx bxs-home-alt-2'></i>
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className='enlaces'>
                            <i className='bx bxs-dashboard' ></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/clientes" className='enlaces'>
                            <i className='bx bxs-user' ></i>
                            <span>Clientes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/envios"} className='enlaces'>
                            <i className='bx bx-package' ></i>
                            <span>Envios</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={""} className='enlaces'>
                            <i className='bx bxs-report' ></i>
                            <span>Reportes</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

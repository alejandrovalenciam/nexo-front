import { Encabezado } from "../Encabezado/Encabezado"
import { Menu } from "../Menu/Menu"
import './dashboard.css'

export const Dashboard = () => {
    return (
        <>
            <Menu />
            <Encabezado />

            <div className="dashboard">
                <div className="box">
                    <h2>Total clientes</h2>
                    <p>14</p>
                    <i className='bx bx-user-circle'></i>
                </div>
                <div className="box">
                    <h2>Total projects</h2>
                    <p>10</p>
                    <i className='bx bxs-folder'></i>
                </div>
                <div className="box">
                    <h2>Open folder</h2>
                    <p>08</p>
                    <i className='bx bxs-folder-open'></i>
                </div>
                <div className="box">
                    <h2>Total pedidos</h2>
                    <p>07</p>
                    <i className='bx bxs-package'></i>
                </div>
                <div className="box">
                    <h2>Total report</h2>
                    <p>10</p>
                    <i className='bx bxs-bar-chart-alt-2'></i>
                </div>
            </div>

            {/* <main className="contenedor" id="contenedor">
                <div className="tareas">
                    <h2>Lista de tareas</h2>
                    <button>Crear tarea</button>
                </div>
            </main> */}
        </>
    )
}

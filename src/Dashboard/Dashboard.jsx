import { Menu } from "../Menu/Menu"
import { EnviosCard } from "../componentes/estadisticas/EnviosCard"
import './dashboard.css'

export const Dashboard = () => {
    return (
        <>
            <Menu />

            <div className="dashboard">
                <h2 className="titulo">Dashboard</h2>

                <div>
                    <EnviosCard />
                </div>
            </div>    
        </>
    )
}

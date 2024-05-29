import { useEffect, useState } from "react";
import { Menu } from "../Menu/Menu"
import { EnviosCard } from "../componentes/estadisticas/EnviosCard/EnviosCard"
import './dashboard.css'
import axios from "axios";
import { ClientesCard } from "../componentes/estadisticas/ClientesCard/ClientesCard";
import { CiudadesGrafico } from "../componentes/estadisticas/CiudadesGrafico/CiudadesGrafico";

export const Dashboard = () => {
    const [envios, setEnvios] = useState([]);
    const [enviosEntregados, setEnviosEntregados] = useState([]);

    const [clientes, setClientes] = useState([]);
    const [clientesActivos, setClientesActivos] = useState([]);

    const [ciudades, setCiudades] = useState([]);
    const [cantidadPorDestino, setCantidadPorDestino] = useState([])


    useEffect(() => {
        const cargarEnviosEntregados = () => {
            axios.get("http://localhost:8080/envios?estado=entregado")
                .then(({ data }) => setEnviosEntregados(data));
        }
        cargarEnviosEntregados();

        const cargarEnvios = () => {
            setCantidadPorDestino([]);
            axios.get("http://localhost:8080/envios/")
                .then(({ data }) => {
                    setEnvios(data);
                    const ciudadesExtraidas = [...new Set(data.map(envio => envio.destino))];
                    setCiudades(ciudadesExtraidas);

                    ciudadesExtraidas.forEach((ciudad) => {
                        axios.get(`http://localhost:8080/envios/ciudad?destino=${ciudad}`)
                            .then(({data}) => {
                                setCantidadPorDestino(cant => [...cant, data.length])
                            })
                    })
            });
        }
        cargarEnvios();

        const cargarClientesActivos = () => {
            axios.get("http://localhost:8080/clientes?estado=activo")
                .then(({ data }) => setClientesActivos(data));
        }
        cargarClientesActivos();

        const cargarClientes = () => {
            axios.get("http://localhost:8080/clientes/")
                .then(({ data }) => setClientes(data));
        }

        cargarClientes();
    }, []);

    return (
        <>
            <Menu />

            <div className="dashboard">
                <h2 className="titulo">Dashboard</h2>

                <div className="estadisticas">
                    <EnviosCard enviosEntregados={enviosEntregados.length} totalEnvios={envios.length} />
                    <ClientesCard clientesActivos={clientesActivos.length} totalClientes={clientes.length} />
                    <CiudadesGrafico ciudades={ciudades} cantidades={cantidadPorDestino}/>
                </div>
            </div>
        </>
    )
}

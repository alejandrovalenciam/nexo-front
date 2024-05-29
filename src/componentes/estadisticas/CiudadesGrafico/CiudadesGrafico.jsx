import React from 'react'
import { Bar } from 'react-chartjs-2'
import './ciudadesGrafico.css'

export const CiudadesGrafico = ({ ciudades, cantidades }) => {
    return (
        <div className="card-bar">
            {/* <div className='grafico-bar'> */}
                <Bar
                    data={{
                        labels: ciudades,
                        datasets: [
                            {
                                label: "Cantidad",
                                data: cantidades,
                                
                            },
                        ],
                    }}
                />
            {/* </div> */}
            <div className="descripcion-bar">
                <p>Ciudades con envíos: {ciudades.length}</p>
            </div>
        </div>
    )
}

import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export const ClientesCard = ({ clientesActivos, totalClientes}) => {
  return (
    <div className='card'>
            <div className="grafico">
                <Doughnut
                    data={{
                        labels: ['Activos', 'No activos'],
                        datasets: [
                            {
                                label: "",
                                data: [clientesActivos, totalClientes - clientesActivos],
                                backgroundColor:[
                                    "rgba(43, 63 ,229, 0.8)",
                                    "rgba(250, 192 , 19, 0.8)"
                                ]
                            },
                        ],
                    }}
                />
            </div>


            <div className='total'>
                <p>Total de clientes: {totalClientes}</p>
                <p className='cantidad'>{`${clientesActivos}/${totalClientes} activos`}</p>
                <p className='cantidad'>{(clientesActivos/totalClientes * 100).toFixed(2)}%</p>
            </div>
        </div>
  )
}

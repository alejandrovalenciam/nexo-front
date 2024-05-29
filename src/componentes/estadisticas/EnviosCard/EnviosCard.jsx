// import { Chart } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import './enviosCard.css'


export const EnviosCard = ({ enviosEntregados, totalEnvios }) => {
    return (
        <div className='card'>
            <div className="grafico">
                <Doughnut
                    data={{
                        labels: ['Entregado', 'No entregado'],
                        datasets: [
                            {
                                label: "",
                                data: [enviosEntregados, totalEnvios - enviosEntregados],
                            },
                        ],
                    }}
                />
            </div>


            <div className='total'>
                <p>Total de envios: {totalEnvios}</p>
                <p className='cantidad'>{`${enviosEntregados}/${totalEnvios} entregados`}</p>
                <p className='cantidad'>{(enviosEntregados/totalEnvios * 100).toFixed(2)}%</p>      
            </div>
        </div>

    );

}

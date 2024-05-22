import './encabezado.css';

export const Encabezado = () => {
    return (
        <header id="header">
            <div className="superior">
                <div className="salir">
                    <a href="/"><i className='bx bx-exit' title='Cerrar sesión'></i></a>
                </div>
            </div>
        </header>
    )
}

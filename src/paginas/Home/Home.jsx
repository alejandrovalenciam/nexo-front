import React from 'react'
import './home.css'
import { Menu } from '../../componentes/Menu/Menu'


export const Home = () => {
  return (
    <>
        <Menu />

        <div className="home">
            <h1>Bienvenido</h1> 

            <div className="logo">
                <i id="cloud" className='bx bxs-cloud' />
                <p>NexoCRM</p>
            </div>
            
        </div>
    </>
  )
}

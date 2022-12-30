import React, { Component } from 'react'
import Equipo from './components/Equipo';
import Arg from "./img/arg.svg";
import Usa from "./img/usa.svg";

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      visitante: 0
    }
  }

  /* Cree sus funciones aquí abajo */

  render () {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div className='tablero_grupo'>
          <div className='contenedor_local'>
            {/* Inyección de componente */}
            <Equipo bandera={ Arg } />

            <button className='btn_inc'>+ 1</button>
            <button className='btn_inc'>+ 2</button>
            <button className='btn_inc'>+ 3</button>
            <button className='btn_dec'>- 1</button>
            <button className='btn_dec'>- 2</button>
            <button className='btn_dec'>- 3</button>
          </div>
          <div className='contenedor_visitante'>
            {/* Inyección de componente */}
            <Equipo bandera={ Usa } />

            <button className='btn_inc'>+ 1</button>
            <button className='btn_inc'>+ 2</button>
            <button className='btn_inc'>+ 3</button>
            <button className='btn_dec'>- 1</button>
            <button className='btn_dec'>- 2</button>
            <button className='btn_dec'>- 3</button>

          </div>
        </div>
        <button>Reiniciar tablero</button>
      </>
    )
  }
}

export default Tablero;
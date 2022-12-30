import { Component } from "react";


class Equipo extends Component {
  render() {
    return (
      <div className='tablero_cabecera'>
          <h3> {/* local o vistitante recibido por props */} </h3>
          <h3>{/* contador recibido por props */}</h3>

          {/* agregar el src con la bandera que recibimos por props, recuerde usar la expresión de llaves en vez de comillas */}
          <img className='img_sel' src="" alt="" />
      </div>
    )
  }
}

export default Equipo;
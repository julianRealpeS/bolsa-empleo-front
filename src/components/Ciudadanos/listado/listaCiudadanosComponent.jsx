import React, { useEffect, useState } from 'react'
import './listaCiudadanosComponent.css'
import { consultarCiudadanos, eliminarCiudadano } from "../../../services/ciudadanoService"
import { useNavigate } from 'react-router-dom';

export default function ListaCiudadanos() {

  const navigate = useNavigate();
  const [ciudadanos, setCiudadanos] = useState([])

  useEffect(() => {
    consultarCiudadanos(setCiudadanos)
  }, []);

  function eliminar(id){
    eliminarCiudadano(id).then(
      window.location.reload(false)
    )
  }

  return (
    <div className='main'>
      <div>
        <h1>Ciudadanos Registrados</h1>
      </div>
      <div className='registrar'>
        <button onClick={() => navigate("/registrarCiudadano")}>Registrar</button>
      </div>
      <table>
        <thead className='tableHead'>
          <tr>
            <th>Cédula</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha de nacimiento</th>
            <th>Profesión</th>
            <th>Aspiracion Salarial</th>
            <th>Correo Electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { ciudadanos.map((element) => { return <tr key={element.ciudadanoId}> 
              <td className='textLeft'>{element.cedula}</td>
              <td className='textLeft'>{element.nombres}</td> 
              <td className='textLeft'>{element.apellidos}</td> 
              <td className='textLeft'>{element.fechaNacimiento}</td> 
              <td className='textLeft'>{element.profesion}</td> 
              <td className='textLeft'>{element.aspiracionSalarial}</td> 
              <td className='textLeft'>{element.correoElectronico}</td> 
              <td>
                <button type="button" onClick={() => navigate("/actualizarCiudadano", {state: { key: element.ciudadanoId }})}>Actualizar</button>
                <button type="button" onClick={() => eliminar(element.ciudadanoId)}>Eliminar</button>
              </td> 
            </tr>
            }) }
        </tbody>
      </table>
    </div>
  )
}

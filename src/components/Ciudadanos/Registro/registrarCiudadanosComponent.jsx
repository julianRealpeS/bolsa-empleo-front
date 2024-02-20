import React, { useEffect, useState } from 'react'
import './registrarCiudadanosComponent.css'
import consultarTiposDocumento from "../../../services/tipoDocumentoService"
import { registrar } from '../../../services/ciudadanoService'
import { useNavigate } from 'react-router-dom'

export default function RegistrarCiudadanosComponent() {

  const [tipoDocumentos, settipoDocumentos] = useState([])
  const [tipoDocumentoSelected, setTipoDocumentoSelected] = useState()

  const [cedula, setCedula] = useState()
  const [nombres, setNombres] = useState()
  const [apellidos, setApellidos] = useState()
  const [fechaNacimiento, setFechaNacimiento] = useState()
  const [profesion, setProfesion] = useState()
  const [salario, setSalario] = useState()
  const [email, setEmail] = useState()

  const navigate = useNavigate();
  useEffect(() => {
    consultarTiposDocumento(settipoDocumentos)
  }, []);

  function registrarCiudadano(){
    if(tipoDocumentoSelected && cedula && nombres && apellidos && fechaNacimiento && profesion && salario && email){
      registrar({
        "tipoDocumentoId": parseInt(tipoDocumentoSelected),
        "cedula": cedula,
        "nombres": nombres,
        "apellidos": apellidos,
        "fechaNacimiento": fechaNacimiento,
        "profesion": profesion,
        "aspiracionSalarial": parseInt(salario),
        "correoElectronico": email
      }).then(
        navigate("/listaCiudadanos")
        );;
    }else alert("Debe llenar todos los campos")
  }

  return (
    <div className='main'>
      <div>
        <h1>Registro de ciudadano</h1>
      </div>
      <div className='formStyle'>
        <label htmlFor="td">Tipo de documento</label>
        <select name="td" id="td" onChange={e => setTipoDocumentoSelected(e.target.value)}>
        <option value=""></option>
          { tipoDocumentos.map((element, index) => <option key={index} value={element.tipoDocumentoId}>{element.nombre}</option>) }
        </select>
        <br/>
        <label htmlFor="cedula">Cédula</label>
        <input id='cedula' type="text" onChange={e => setCedula(e.target.value)}/>
        <br/>
        <label htmlFor="nombre">Nombres</label>
        <input id='nombre' type="text" onChange={e => setNombres(e.target.value)}/>
        <br/>
        <label htmlFor="apellido">Apellidos</label>
        <input id='apellido' type="text" onChange={e => setApellidos(e.target.value)}/>
        <br/>
        <label htmlFor="fecNac">Fecha de nacimiento</label>
        <input id='fecNac' type="date" onChange={e => setFechaNacimiento(e.target.value)}/>
        <br/>
        <label htmlFor="profesion">Profesión</label>
        <input id='profesion' type="text" onChange={e => setProfesion(e.target.value)}/>
        <br/>
        <label htmlFor="aspSalarial">Aspiración Salarial</label>
        <input id='aspSalarial' type="number" onChange={e => setSalario(e.target.value)}/>
        <br/>
        <label htmlFor="email">Correo electrónico</label>
        <input id='email' type="text" onChange={e => setEmail(e.target.value)}/>
        <br/>
        <button onClick={() => registrarCiudadano()}>Crear</button>
        <button onClick={() => navigate("/listaCiudadanos")}>Volver</button>
      </div>
    </div>
  )
}

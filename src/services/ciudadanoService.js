import { urlBase, urlConsultarCiudadanos, urlRegistrarCiudadano, urlConnsultarCiudadanoPorId, urlActualizarCiudadannon, urlEliminarCiudadano } from "../routes"

async function registrar(ciudadanoObj) { 

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ciudadanoObj)
      };

    await fetch(urlBase+urlRegistrarCiudadano, options).then(response => 
        response.json()
    ).then( response => {
            if(!response.status){
                alert("Exito al registrar el ciudadano")
            }else if(response.status >= 400 && response.status < 500){
                alert("Error al registrar el ciudadano")
            }else if(response.status >= 500){
                alert(response.title)
            }
        }
    ).catch(error => console.error(error));
}

async function consultarCiudadanos(state){
    await fetch(urlBase+urlConsultarCiudadanos).then((response)=>
        response.json()
    ).then((json) => {
        state(json)
    }).catch(error => console.error(error))
}

async function consultarCiudadanoPorId(id,
    setTipoDocumentoSelected,
    setCedula, 
    setNombres,
    setApellidos,
    setFechaNacimiento,
    setProfesion,
    setSalario,
    setEmail){
    await fetch(urlBase+urlConnsultarCiudadanoPorId+"/"+id).then((response)=>
        response.json()
    ).then((json) => {
        setTipoDocumentoSelected(json.tipoDocumentoId)
        setCedula(json.cedula)
        setNombres(json.nombres)
        setApellidos(json.apellidos)
        setFechaNacimiento(json.fechaNacimiento)
        setProfesion(json.profesion)
        setSalario(json.aspiracionSalarial)
        setEmail(json.correoElectronico)
    }).catch(error => console.error(error))
}

async function actualizar(ciudadanoObj) { 

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ciudadanoObj)
      };

    await fetch(urlBase+urlActualizarCiudadannon, options).then(response => 
        response.json()
    ).then( response => {
            if(!response.status){
                alert("Exito al registrar el ciudadano")
            }else if(response.status >= 400 && response.status < 500){
                alert("Error al registrar el ciudadano")
            }else if(response.status >= 500){
                alert(response.title)
            }
        }
    ).catch(error => console.error(error));
}

async function eliminarCiudadano(id) { 

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
      };

    await fetch(urlBase+urlEliminarCiudadano+"/"+id, options).then(response => 
        response.json()
    ).then( response => {
            if(!response.status){
                alert("Exito al eliminar el ciudadano")
            }else if(response.status >= 400 && response.status < 500){
                alert("Error al eliminar el ciudadano")
            }else if(response.status >= 500){
                alert(response.title)
            }
        }
    ).catch(error => console.error(error));
}

export { consultarCiudadanos,registrar,consultarCiudadanoPorId, actualizar, eliminarCiudadano }
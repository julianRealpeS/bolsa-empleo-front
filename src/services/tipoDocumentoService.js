import { urlBase,urlListaTipoDocumento } from '../routes';

async function consultarTiposDocumento(state) {
    await fetch(urlBase+urlListaTipoDocumento).then((response)=>
        response.json()
    ).then((json) => {
        state(json)
    }).catch(error => console.error(error))
}

export default consultarTiposDocumento;
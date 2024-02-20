import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ListaCiudadanos from './components/Ciudadanos/listado/listaCiudadanosComponent';
import RegistrarCiudadanosComponent from './components/Ciudadanos/Registro/registrarCiudadanosComponent';
import ActualizarCiudadanosComponent from './components/Ciudadanos/Actualizacion/actualizarCiudadanosComponent';

function App() {

  const router = createBrowserRouter([
    {
      path: "/listaCiudadanos",
      element: <ListaCiudadanos />
    },{
      path: "/registrarCiudadano",
      element: <RegistrarCiudadanosComponent />,
    },{
      path: "/actualizarCiudadano",
      element: <ActualizarCiudadanosComponent />,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;

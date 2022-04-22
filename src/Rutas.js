import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Inicio from './pages/Inicio.js';
// import Contenedor from './pages/ContenedorProductos';
import Productos from './pages/Productos';
import EliminarProducto from './pages/EliminarProducto';	
import DetalleProducto from './pages/DetalleProducto.js';
import AltaProducto from './pages/AltaProducto.js';
import NotFound from './pages/NotFound.js';
import QuienSoy from './pages/QuienSoy.js';

function Rutas () {
    return(
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            {/* <Route exact path = "/productos" element={<Contenedor/>}/> */}
            <Route exact path = "/productos" element={<Productos/>}/>
            <Route exact path = "/producto/eliminar/:id" element={<EliminarProducto/>}/>
            <Route exact path = "/producto/detalle/:id" element={<DetalleProducto/>}/>
            <Route exact path="/altaProducto" element={<AltaProducto/>}/>
            <Route exact path="/quienSoy" element={<QuienSoy/>}/>
            <Route exact path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
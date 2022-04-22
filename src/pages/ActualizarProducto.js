import React from "react"
import Titulo from "../componentes/Titulo"
import FormularioProducto from "../componentes/FormularioProducto";

function ActualizarProducto() {
  return (
            <div>
                <div><Titulo 
                      text="Fuller Cosmetics"/>
                </div>
                <div>
                    <FormularioProducto/>
                </div>
            </div>
            
        );
}

export default ActualizarProducto;
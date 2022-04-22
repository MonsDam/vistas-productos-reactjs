import React from "react";

class Inicio extends React.Component{
    render(){
        return(
            <div className="cont-botones d-grid gap-2 position-relative mt-5">
                <a href="/quienSoy">
                <button type="button" className="btn btn-dark" >¿Quién soy?</button>
                </a>
                <a href="/productos">
                <button type="button" className="btn btn-dark">Productos</button>
                </a>
                <a href="/altaProducto">
                <button type="button" className="btn btn-dark">Formulario</button>
                </a>
            </div>
        )
    }
}

export default Inicio
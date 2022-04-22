import React from "react";
import Titulo from "../componentes/Titulo";
import "../estilos/QuienSoy.css";


class QuienSoy extends React.Component{
    render(){
        return(
            <div>
            <div><Titulo
                    text="¿Quién Soy?"/>
            </div>
            <div className="foto shadow">
                <img src="imagenes/Fatima.jpg" className="img-thumbnail" alt="Fatima García" />
            </div>
            <div className="info general">
                <h5>Información general</h5>
                <p>Nombre: Fatima Monserrat Garcia Damian</p>
                <p>Edad: 19 años</p>
                <p>Fecha de nacimiento: 2 de septiembre de 2002</p>
            </div>
            <div className="gustos general">
                <h5>Mis gustos</h5>
                <p>Me gusta jugar con mis hermanos, pasar tiempo con mi familia, 
                    bailar, leer, comer frutas y sobre todo dormir</p>
            </div>
            <div className="utvt general">
                <h5>¿Qué me gusta de la UTVT?</h5>
                <p>Me gustán las amplias áres verdes que tiene</p>
            </div>
                <div className="boton-inicio mb-3">
                    <a href="/">
                    <button type="button" className="btn btn-success" >Volver al inicio</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default QuienSoy
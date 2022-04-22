import React from 'react'
import '../estilos/FichaProducto.css'


class FichaProducto extends React.Component{
    render(){
        return(
                <div className="ficha ">
                    <div>
                        <img src={this.props.imagen} className="imagen"/>
                        <div>
                            <div className="texto">
                                Descripcion: {this.props.descripcion}
                            </div>
                            <div className="texto">
                                Precio: {this.props.precio}
                            </div>
                            <button className={this.props.boton} >Ver más</button>
                            <button className={this.props.boton2} >Añadir a la cesta</button>
                        </div>
                    </div>
                </div>

            )
    }
}

export default FichaProducto
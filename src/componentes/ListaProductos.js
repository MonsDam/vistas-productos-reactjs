import react from 'react'
import FichaProducto from './FichaProducto'

function ListaProductos(props){
    return(
        <div>
            {props.productos.map((contenedor) => {
                return(     
                    <FichaProducto
                    descripcion={contenedor.descripcion}
                    precio={contenedor.precio}
                    imagen={contenedor.imagen}
                    boton="btn btn-info" 
                    boton2 ="btn btn-dark"/>
                    )})}
        </div>

    )
}

export default ListaProductos
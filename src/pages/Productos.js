import React, { useState, useEffect } from "react"
import { useNavigate  } from "react-router-dom"
import Titulo from "../componentes/Titulo"

function Productos() {

    const [productos, setProductos] = useState([])

    const navigate = useNavigate(); 

    const fetchProductos = () => {
        fetch("http://127.0.0.1:8000/api/productos")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProductos(data)
            })
    }

    const confirmarEliminar = (e) => {
        e.preventDefault()
        if (window.confirm("¿Está seguro de eliminar el producto?")) {
            navigate(`/producto/eliminar/${e.target.id}`)            
        }
    
    }


    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <div>
            <div><Titulo
                text="Fuller Cosmetics" />
            </div>
            <div className="container">
                <h1 className="mt-3">Productos</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Clave</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                            <th>Proveedor</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.categoria}</td>
                                <td>{producto.proveedor}</td>
                                <td><img src={`imagenes/${producto.imagen}`} style={{height: "150px"}} alt={producto.descripcion} /></td>
                                <td>
                                    <a href={`/producto/detalle/${producto.id}`} className="btn btn-dark">Detalles</a>
                                    <button className="btn btn-primary">Editar</button>
                                    <button id={producto.id} onClick={confirmarEliminar} className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Productos
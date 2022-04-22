import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Titulo from "../componentes/Titulo"

function DetalleProducto() {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    
    useEffect(() => {
        const fetchProducto = () => {
            fetch(`http://127.0.0.1:8000/api/productos/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProducto(data)
                })
        }
        fetchProducto()
    }, [id])

    return (
        <div>
            <div><Titulo text="Fuller Cosmetics" /></div>
            <div className="container mt-3">
                <h1 className="display-3">Detalle producto</h1>
                <div className="row">
                    <img src={`/imagenes/${producto.imagen}`} alt={producto.nombre} className="col-md-5 me-5" />
                    <div className="col-md-6 card card-body ps-4 py-5 shadow d-flex flex-column">
                        <p className="fs-5">
                            Clave: {producto.id}
                        </p>
                        <p className="fs-5">
                            Nombre: {producto.nombre}
                        </p>
                        <p className="fs-5">
                            Descripcion: {producto.descripcion}
                        </p>
                        <p className="fs-5">
                            Precio: {producto.precio}
                        </p>
                        <p className="fs-5">
                            Categoria: {producto.categoria}
                        </p>
                        <p className="fs-5">
                            Proveedor: {producto.proveedor}
                        </p>
                        <div className="mt-auto">
                            <a href={`/productos`} className="btn btn-dark me-2">Volver atras</a>
                            <a href={`/producto/editar/${producto.id}`} className="btn btn-primary">Editar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto
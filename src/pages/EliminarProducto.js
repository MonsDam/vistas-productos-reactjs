import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Titulo from '../componentes/Titulo'

function EliminarProducto() {

    const { id } = useParams()

    const eliminarProducto = () => {
        fetch(`http://127.0.0.1:8000/api/productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    }
    
    useEffect(() => {
        eliminarProducto()
    }, [])

    return (
        <div>
            <div><Titulo
                text="Fuller Cosmetics" />
            </div>
            <div className='w-100 d-flex' style={{ height: "80vh" }}>
                <div className='m-auto d-flex   flex-column'>
                    <h1 className='display-3'>
                        Se eliminó el producto con clave {id}
                    </h1>
                    <Link to='/productos' className='btn btn-primary mt-4 mx-auto'>
                        Regresar
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EliminarProducto
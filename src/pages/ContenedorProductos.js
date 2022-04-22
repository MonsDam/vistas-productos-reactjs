import React from "react";
import Titulo from '../componentes/Titulo';
import ListaProductos from "../componentes/ListaProductos";


class ContenedorProductos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datos:[
                {   
                    "descripcion": "Crema con glicerina y limón",
                    "precio": "$60",
                    "imagen":"imagenes/crema.jpg"
                },
                {   
                    "descripcion": "Set de 4 labiales indelebles",
                    "precio": "$380",
                    "imagen":"imagenes/labiales.jpg"
                },
                {   
                    "descripcion": "Fragancia para caballero",
                    "precio": "$130",
                    "imagen":"imagenes/perfume.png"
                }
            ]
        }
    }
    render(){
            return( <div>
                    <div><Titulo
                        text="Fuller Cosmetics"/>
                    </div>
                    <div>
                        <ListaProductos
                         productos={this.state.datos}/>
                    </div>
                    </div>
                    )
            }
}

export default ContenedorProductos
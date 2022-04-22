import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/Titulo.css'
import './estilos/Inicio.css'
import Rutas from './Rutas.js'
 
import 'bootstrap/dist/css/bootstrap.css'

const elemento = (
            <div>
                <Rutas/>
            </div>
)

const container = document.getElementById('root')

ReactDOM.render(elemento, container)

















//const carrera = 'TIC'
// const mostrar = true
// const mensaje = {
//   texto: 'Bienvenidos al Curso de Desarrollo Movil', 
//   grupo: ' DSM-51'
// }

// const estudiantes = [
//   "DYLAN", 
//   "HUMBERTO", 
//   "JOSE JUAN", 
//   "LUIS EDUARDO", 
//   "SERGIO", 
//   "CESAR ALAN",
//   "ANGEL",
//   "CARLOS GAEL",
//   "ENRIQUE",
//   "FATIMA MONSERRAT",
//   "PAOLA",
//   "DIEGO",
//   "FRANCISCO JAVIER",
//   "JUAN",
//   "LEONEL",
//   "SARA",
//   "ISMAEL",
//   "CAROLINA",
//   "SEBASTIAN",
//   "DIEGO",
//   "MAILED",
//   "ARTURO",
//   "EDGAR",
//   "RAFAEL EDUARDO",
//   "LUIS EDUARDO",
//   "DANIELA DANAE",
//   "DULCE MARIA",
//   "IVAN", ];

// const matriculas = [ 
//   "222010139",
//   "222010330",
//   "221911729",
//   "222010012",
//   "222010096",
//   "222011258",
//   "222010681",
//   "222010579",
//   "221911908",
//   "222010694",
//   "222010666",
//   "222010696",
//   "222011269",
//   "222010053",
//   "222010675",
//   "222010084",
//   "222010638",
//   "222010146",
//   "222010091",
//   "221910499",
//   "221919614",
//   "222010001",
//   "222010206",
//   "222010075",
//   "222010111",
//   "221910358",
//   "222010335",
//   "222010248", ]
  
// const estudiantess = {
//   nombre: estudiantes,
//   matricula: matriculas
// }

// function MostrarMensaje(mensaje) { 
//   if (carrera == 'TIC') {
//   return <h1> {mensaje.texto} del grupo {mensaje.grupo} </h1>
//   } 
//   else {
//     return <h1> Grupo Incorrecto  </h1>
//   }
// }

// function MostrarEstudiantes(estudiantess){
//  if (mostrar) {
//  return <div> Alumnos: 
//     <ul> 
//       {estudiantess.nombre.map (alumno => {
//         return <li> {alumno} </li>
//       })
//     } 
//     </ul>
//     </div>
//  } else {
//    return <h1> La lista no se puede mostrar </h1>
//  }
// }

//  const elemento = <div> 
//     {MostrarMensaje (mensaje)}
//     {MostrarEstudiantes (estudiantess)}
//     </div>

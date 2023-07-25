import  { useState } from "react"; 
import { InputValue } from "./components/InputValue";

const Item=({nombre, visto}) => {
  
  
  return(
    <li>{nombre}
        {visto ? "✅" : "❌"}
         </li>
    )
  };
  
  const Listado=() => {
    
    let listadoSecciones = [
      {id: 0, nombre : 'instalaciones nesesarias' , visto: true},
      {id: 1, nombre:"Uso de Vite", visto: true},     
      {id: 2, nombre:'componentes', visto: true},
      {id: 3, nombre:'Variables de JSX', visto: true},
      {id: 4, nombre:"props", visto: true},
      {id: 5, nombre:'eventos', visto: true},
      {id: 6, nombre:'Usestate', visto: true},
      {id: 7, nombre:"Redux", visto: false },
      {id: 8, nombre:"custom Hooks", visto: false},
    ]
    const onAgregarTareas = (val) => {
      if (typeof val !== 'string') {
        return; 
      }
      let valor = val.trim();
      if (valor.length < 1) return;
      const envio = {
        id: arreglo.length,
        nombre: valor, 
        visto: false,
      };
    
      setArreglo([...arreglo, envio]);
    };
    const [arreglo, setArreglo]= useState(listadoSecciones);
    
    return(
      <>
    <h2>Listado Del Curso</h2>
      <InputValue agregarTareas={onAgregarTareas}/>
      <ol>
      {arreglo.map(listadoitem => (
        <Item key={listadoitem.id} nombre={listadoitem.nombre} visto={listadoitem.visto} />
      ))}
</ol>
   
  </>
    )

  }
  
export default Listado
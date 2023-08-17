import { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import './index.css'


function App() {
  const [productos, setProductos]= useState([]);

  const addProducto = (producto)=>{
    setProductos([...productos, producto])
    console.log()

  };

  return (
        <div className="card">
        <h1>INGRESA EL ARTÍCULO / COLOR / TALLE</h1>
        <div>
            <Form onAddProducto = {addProducto}/>
        </div>
        
        <hr/>
            <Card productos={productos}/>
        </div>
    
  );
}


export default App;
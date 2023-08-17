import { useState } from "react";
import './index.css'

function Form({onAddProducto}){

    const[articulo, setArticulo]= useState  ("");
    const [precio,setPrecio] =useState("");
    const [cantidad, setcantidad]= useState("")
    const [color, setColor]= useState("")
    const [talle, setTalle]= useState("")
    const [mensaje, setMensaje]=useState("")


    const handleSubmit = (e) => {
        e.preventDefault();


        if((articulo && color && talle && precio && cantidad) &&(articulo.length > 3)&&(color.length >5)&& (precio >0) && (!isNaN(cantidad))&& (cantidad >0)){
            onAddProducto({articulo,color, talle,precio,cantidad});
            setArticulo("");
            setColor("");
            setTalle("");
            setPrecio("");
            setcantidad("")

            const mensaje = "Pedido ingresado";
            setMensaje(mensaje);

        }else{
            const mensaje = "Por favor chequea que la información sea correcta";
            setMensaje(mensaje);        
        }   
        

    };


    return(
    <div>
            
        <form onSubmit={handleSubmit}> 
            <ul >
                <label>Artículo</label>
                <li className="li"><input type="text" placeholder="Ingrese el artículo" value={articulo} onChange={(e)=>setArticulo(e.target.value)} /></li>
                <label>Color</label>
                <li className="li"><input type="text" placeholder="Ingrese el color" value={color} onChange={(e)=>setColor(e.target.value)} /></li>
                <label>Talle</label>
                <li className="li"><input type="text" placeholder="Ingrese el talle" value={talle} onChange={(e)=>setTalle(e.target.value)} /></li>
                <label>Cantidad</label>
                <li className="li"><input type="text" placeholder="Ingrese la cantidad" value={cantidad} onChange={(e) =>setcantidad(e.target.value)} /></li>
                <label>Precio</label>
                <li className="li"> <input type="text" placeholder="Ingrese el precio" value={precio} onChange={(e) =>setPrecio(e.target.value)}/></li>
                
                <button type="submit">Agregar artículo</button>
            </ul>
                <h4>{mensaje}</h4>
        </form>
    
    
    </div>   

    );
}

export default Form;
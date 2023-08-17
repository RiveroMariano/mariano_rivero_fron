import { useState } from "react";

function Card({productos}) {



  return (
    
      <div className="tabla">
        <h1>Listado de artículos pedidos</h1>
       {productos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Artículo</th>
              <th>Color</th>
              <th>Cantidad</th>
              <th>Talle</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={index}>
                <td>{producto.articulo}</td>
                <td>{producto.color}</td>
                <td>{producto.talle}</td>
                <td>{producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td>${producto.precio * producto.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
        ):(<p>No hay Pedidos regitrados</p>)}
      </div>
    );
  }
export default Card;
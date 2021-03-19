import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { descargarProductosAction } from "../actions/productoActions";
import Producto from "./Producto";

const Carta = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.carta.productos);

  useEffect(() => {
    const loadingProductos = () => dispatch(descargarProductosAction());
    loadingProductos();
  }, []);
  
 

  return (
    
    <div>
      <h1>Toda la carta</h1>

      {!productos ? (
        <p className="text-center">Cargando....</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          { productos.length === 0 ? 'No hay productos' : (
                       productos.map(producto => (
                           <Producto
                                key={producto.id}
                                producto={producto}
                           />
                       ))
                   ) }
          </tbody>
        </table>
      )}
      <Link to="/nuevo">Añadir</Link>

    </div>
  );
};

export default Carta;

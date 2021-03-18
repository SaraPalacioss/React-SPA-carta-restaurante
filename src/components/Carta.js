import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { descargarProductosAction } from "../actions/productoActions";
import Producto from "./Producto";

const Carta = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingProductos = () => dispatch(descargarProductosAction());
    loadingProductos();
  }, []);
  
  const productos = useSelector((state) => state.carta.productos);


  console.log(productos);

  return (
    
    <div>
      <h1>Todos la carta</h1>

      {productos.length === undefined || productos.length === null || productos.length === 0 ? (
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
            {
              productos.map(producto => (
                  <Producto key={producto.id} producto={producto} />
                ))}
          </tbody>
        </table>
      )}
      <Link to="/nuevo">Añadir</Link>

    </div>
  );
};

export default Carta;

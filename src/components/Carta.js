import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carta;

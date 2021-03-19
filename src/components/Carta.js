import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { descargarProductosAction } from "../actions/productoActions";
import Producto from "./Producto";
import "../styles/Carta.scss";

const Carta = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.carta.productos);

  useEffect(() => {
    const loadingProductos = () => dispatch(descargarProductosAction());
    loadingProductos();
  }, [productos]);

  return (
    <div className="carta">
      <h1>CARTA</h1>

      {!productos ? (
        <p className="text-center">Cargando....</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0
              ? <p>No hay productos</p>
              : productos.map((producto) => (
                  <Producto key={producto.id} producto={producto} />
                ))}
          </tbody>
        </table>
      )}
      <Link to="/nuevo" className="link">Añadir nuevo producto</Link>
    </div>
  );
};

export default Carta;

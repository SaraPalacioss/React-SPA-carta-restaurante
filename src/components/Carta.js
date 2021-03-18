import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { descargarProductosAction } from "../actions/productoActions";

const Carta = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingProductos = () => dispatch(descargarProductosAction());
    loadingProductos();
  }, []);
  
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Carta;

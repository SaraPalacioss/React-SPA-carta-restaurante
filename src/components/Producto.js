import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductosAction } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombreProducto, precioProducto, id } = producto;

  const dispatch = useDispatch();

  const borrarProducto = id => {
    dispatch(borrarProductosAction(id));
  }
  
  return (
    <tr>
      <td>{nombreProducto}</td>
      <td>{precioProducto}€</td>
      <td>
        <Link to={`/editar/${id}`}>Editar</Link>
      </td>
      <td>
        <button onClick={() => borrarProducto(id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default Producto;

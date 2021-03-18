import React from "react";
import { Link } from "react-router-dom";
const Producto = ({ producto }) => {
  const { nombreProducto, precioProducto, id } = producto;
  return (
    <tr>
      <td>{nombreProducto}</td>
      <td>{precioProducto}€</td>
      <td>
        <Link to={`/editar/${id}`}>Editar</Link>
      </td>
      <td>
        <Link to={`/borrar/${id}`}>Borrar</Link>
      </td>
    </tr>
  );
};

export default Producto;

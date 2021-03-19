import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductosAction, obtenerProductoEditar} from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombreProducto, precioProducto, id } = producto;

  const dispatch = useDispatch();
  const history=useHistory();

  const borrarProducto = id => {
    dispatch(borrarProductosAction(id));
  }

  const redirectEditar = producto => {
    dispatch(obtenerProductoEditar(producto))
    history.push(`/editar/${producto.id}`)
  }
  
  return (
    <tr>
      <td>{nombreProducto}</td>
      <td>{precioProducto}€</td>
      <td>
        <button type="button" onClick={() => redirectEditar(producto)}>Editar</button>
      </td>
      <td>
        <button onClick={() => borrarProducto(id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default Producto;

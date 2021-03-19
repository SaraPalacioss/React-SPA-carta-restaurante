import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductosAction, obtenerProductoEditar} from "../actions/productoActions";
import "../styles/Producto.scss";

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
      <td className="td">{nombreProducto}</td>
      <td className="td">{precioProducto}€</td>
      <td className="td-action">
        <button className="btn-editar" type="button" onClick={() => redirectEditar(producto)}>Editar</button>
     
        <button className="btn-borrar" onClick={() => borrarProducto(id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default Producto;

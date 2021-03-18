import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nuevoProductoAction } from "../../actions/productoActions";

const FormularioNuevo = ({history}) => {

  const [nombreProducto, guardarNombreProducto] = useState('');
  const [precioProducto, guardarPrecioProducto] = useState(0)

  const dispatch = useDispatch();

  const agregrarProducto = producto => dispatch(nuevoProductoAction(producto))

  const submitNuevoProducto = e => {
    e.preventDefault();
    
    agregrarProducto({
      nombreProducto,
      precioProducto
    });

    history.push("/");
    
  };



  return (
    <div>
      <h1>AGREGAR PRODUCTO</h1>
      <form onSubmit={submitNuevoProducto}>
        <label>Nombre: </label>
        <input type="text" name="nombreProducto" value={nombreProducto} placeholder="Nombre del producto" onChange={e => guardarNombreProducto(e.target.value)} />
        <label>Precio: </label>
        <input type="number" name="precioProducto" value={precioProducto} placeholder="Precio del producto" onChange={e => guardarPrecioProducto (Number(e.target.value))}/>
        <button type="submit">Añadir producto</button>
      </form>

    </div>
  );
};

export default FormularioNuevo;

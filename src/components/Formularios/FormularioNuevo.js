import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nuevoProductoAction } from "../../actions/productoActions";
import "../../styles/Formularios.scss";

const FormularioNuevo = ({ history }) => {

  const [nombreProducto, guardarNombreProducto] = useState("");

  const [precioProducto, guardarPrecioProducto] = useState();

  const dispatch = useDispatch();

  const agregrarProducto = (producto) =>
    dispatch(nuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    if (nombreProducto.trim() === "" || precioProducto === undefined || precioProducto <= 0) {
      document.getElementById("alert").innerHTML =
        "Debe cumplimentar todos los campos";
      return null;
    };
    
    agregrarProducto({
      nombreProducto,
      precioProducto,
    });

    history.push("/");
  };

  return (
    <div className="formulario">
      <div>
        <h1>AGREGAR PRODUCTO</h1>
      </div>
      <div>
        <form onSubmit={submitNuevoProducto}>
          <div className="alert">
            <span id="alert"></span>
          </div>
          <div className="formulario-box">
            <label>Nombre: </label>
            <input
              type="text"
              name="nombreProducto"
              value={nombreProducto}
              placeholder="Nombre del producto"
              onChange={(e) => guardarNombreProducto(e.target.value)}
            />
            <label>Precio: </label>
            <input
              type="number"
              name="precioProducto"
              value={precioProducto}
              placeholder="Precio del producto"
              onChange={(e) => guardarPrecioProducto(Number(e.target.value))}
            />
          </div>
          <div className="navigation">
            <button type="submit">Añadir producto</button>
            <Link className="link" to ="/">Volver a la carta</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioNuevo;

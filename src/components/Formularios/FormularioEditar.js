import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { editarProductoAction } from '../../actions/productoActions';
import "../../styles/Formularios.scss";

const FormularioEditar = () => {

  const history = useHistory();

  const dispatch = useDispatch();

  const [producto, guardarProducto] = useState({
    nombreProducto: '',
    precioProducto: ''
  });

  const productoEditar = useSelector(state => state.carta.productoEditar);

  useEffect(() => {
    guardarProducto(productoEditar)
  }, [productoEditar]);

  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const { nombreProducto, precioProducto } = producto;

  const submitEditarProducto = e => {

    e.preventDefault();

    if (nombreProducto.trim() === "" || precioProducto === undefined || precioProducto <= 0) {
      document.getElementById("alert").innerHTML =
        "No puede dejar los campos en blanco";
      return null;
    };

    dispatch(editarProductoAction(producto));

    history.push('/')
  }

  return (
    <div className="formulario">
      <div>
        <h1>EDITAR PRODUCTO</h1>
      </div>
      <div>
        <form onSubmit={submitEditarProducto}>
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
              onChange={onChangeFormulario}
            />
            <label>Precio: </label>
            <input
              type="number"
              name="precioProducto"
              value={precioProducto}
              placeholder="Precio del producto"
              onChange={onChangeFormulario}
            />
          </div>
          <div className="navigation">
            <button type="submit">Guardar cambios</button>
            <Link className="link" to="/">Volver a la carta</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioEditar;

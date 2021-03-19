import React, { useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editarProductoAction } from '../../actions/productoActions';

const FormularioEditar = () => {

  const history = useHistory();

  const dispatch = useDispatch();
  const [producto, guardarProducto] = useState({
    nombreProducto: '',
    precioProducto: ''
  })
  const productoEditar = useSelector(state => state.carta.productoEditar);

  
  useEffect(() => {
    guardarProducto(productoEditar)
  }, [productoEditar])

  const onChangeFormulario = e =>{
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value
    })

  }

  const {nombreProducto, precioProducto} = producto;

  const submitEditarProducto = e => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));

    history.push('/')
  }
  console.log(producto)
  return (
    <div>
      <h1>EDITAR PRODUCTO</h1>
      <form onSubmit={submitEditarProducto}>
        <label>Nombre: </label>
        <input type="text" name="nombreProducto" value={nombreProducto} placeholder="Nombre del producto" onChange={onChangeFormulario} />
        <label>Precio: </label>
        <input type="number" name="precioProducto" value={precioProducto} placeholder="Precio del producto" onChange={onChangeFormulario}/>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default FormularioEditar;

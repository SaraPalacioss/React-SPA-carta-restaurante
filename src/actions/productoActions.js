import {
  NUEVO_PRODUCTO,
  NUEVO_PRODUCTO_ERROR,
  NUEVO_PRODUCTO_CORRECTO,
  DESCARGAR_PRODUCTO,
  DESCARGAR_PRODUCTO_ERROR,
  DESCARGAR_PRODUCTO_CORRECTO,
  BORRAR_PRODUCTO,
  BORRAR_PRODUCTO_CORRECTO,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_INICIAR,
  EDITAR_PRODUCTO_CORRECTO
} from "../types";

import clienteAxios from "../config/axios";


// CREAR NUEVO PRODUCTO

export function nuevoProductoAction(producto) {

  return async (dispatch) => {
    dispatch(nuevoProducto());

    try {
      await clienteAxios.post("/nuevo", producto);
      dispatch(nuevoProductoCorrecto(producto));
    } catch (err) {
      dispatch(nuevoProductoError(true));
    }

  };
};

const nuevoProducto = () => ({
  type: NUEVO_PRODUCTO,
  payload: true,
});

const nuevoProductoCorrecto = (producto) => ({
  type: NUEVO_PRODUCTO_CORRECTO,
  payload: producto,
});

const nuevoProductoError = (estado) => ({
  type: NUEVO_PRODUCTO_ERROR,
  payload: estado,
});


// OBTENER REGISTRO DE PRODUCTOS API

export function descargarProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const respuesta = await clienteAxios.get("/");
      dispatch(descargarProductosCorrecto(respuesta.data));
    } catch (err) {
      dispatch(descargarProductosError());
    };

  };
};

const descargarProductos = () => ({
  type: DESCARGAR_PRODUCTO,
  payload: true,
});

const descargarProductosCorrecto = (producto) => ({
  type: DESCARGAR_PRODUCTO_CORRECTO,
  payload: producto,
});

const descargarProductosError = () => ({
  type: DESCARGAR_PRODUCTO_ERROR,
  payload: true,
});


// BORRAR PRODUCTO

export function borrarProductosAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoBorrar(id));

    try {
      await clienteAxios.delete(`/borrar/${id}`);
      dispatch(borrarProductoCorrecto());
    } catch (err) { }

  };
};

const obtenerProductoBorrar = (id) => ({
  type: BORRAR_PRODUCTO,
  payload: id,
});

const borrarProductoCorrecto = (id) => ({
  type: BORRAR_PRODUCTO_CORRECTO,
});


// OBTENER PRODUCTO PARA EDITAR

export function obtenerProductoEditar(producto) {
  return (dispatch) => {
    dispatch(obtenerProductoEditarAction(producto))
  }
};

const obtenerProductoEditarAction = producto => ({
  type: EDITAR_PRODUCTO,
  payload: producto
});


// EDITAR PRODUCTO

export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(editarProducto())

    try {
      await clienteAxios.put(`/editar/${producto.id}`, producto);
      dispatch(editarProductoCorrecto(producto))
    } catch (error) {
    }

  };
};

const editarProducto = producto => ({
  type: EDITAR_PRODUCTO_INICIAR

});

const editarProductoCorrecto = producto => ({
  type: EDITAR_PRODUCTO_CORRECTO,
  payload: producto
});
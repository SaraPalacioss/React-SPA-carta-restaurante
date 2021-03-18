import {
  NUEVO_PRODUCTO,
  NUEVO_PRODUCTO_ERROR,
  NUEVO_PRODUCTO_CORRECTO,
  DESCARGAR_PRODUCTO,
  DESCARGAR_PRODUCTO_ERROR,
  DESCARGAR_PRODUCTO_CORRECTO,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function nuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(nuevoProducto());
    try {
      await clienteAxios.post("/carta/nuevo", producto);
      dispatch(nuevoProductoCorrecto(producto));

      Swal.fire({
        title: "Correcto!",
        text: "El producto se ha añadido a la carta",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } catch (err) {
      console.log(err);
      dispatch(nuevoProductoError(true));
    }
  };
}

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

export function descargarProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
  };
};

const descargarProductos = () => ({
  type: DESCARGAR_PRODUCTO,
  payload: true
});


import {
  NUEVO_PRODUCTO,
  NUEVO_PRODUCTO_ERROR,
  NUEVO_PRODUCTO_CORRECTO,
  DESCARGAR_PRODUCTO,
  DESCARGAR_PRODUCTO_ERROR,
  DESCARGAR_PRODUCTO_CORRECTO,
  BORRAR_PRODUCTO,
  BORRAR_PRODUCTO_ERROR,
  BORRAR_PRODUCTO_CORRECTO,
} from "../types";

const initialState = {
  carta: [],
  borrarProducto: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NUEVO_PRODUCTO:
    case DESCARGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case NUEVO_PRODUCTO_CORRECTO:
      return {
        ...state,
        loading: false,
        carta: [...state.carta, action.payload],
      };
    case NUEVO_PRODUCTO_ERROR:
    case DESCARGAR_PRODUCTO_ERROR:
    case BORRAR_PRODUCTO_ERROR:

      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DESCARGAR_PRODUCTO_CORRECTO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
        productoBorrar: null
      };
    case BORRAR_PRODUCTO:
      return {
        ...state,
        productoBorrar: action.payload,
      };
    case BORRAR_PRODUCTO_CORRECTO:
      return {
        ...state,
        productos: state.productos.filter(
          producto => producto.id !== state.productoBorrar
        ),
        productoBorrar: null
      };
    default:
      return state;
  }
}

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
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO_CORRECTO,
} from "../types";

const initialState = {
  carta: [],
  error: null,
  loading: false,
  borrarProducto: null,
  productoEditar: null,
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
    case EDITAR_PRODUCTO_ERROR:
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
        productoBorrar: null,
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
          (producto) => producto.id !== state.productoBorrar
        ),
        productoBorrar: null,
      };
    case EDITAR_PRODUCTO:
      return {
        ...state,
        productoEditar: action.payload,
      };
    case EDITAR_PRODUCTO_CORRECTO:
      return {
        ...state,
        productoEditar: null,
        productos: state.prductos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };
    default:
      return state;
  };
};

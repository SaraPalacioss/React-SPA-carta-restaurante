import {
  NUEVO_PRODUCTO,
  NUEVO_PRODUCTO_ERROR,
  NUEVO_PRODUCTO_CORRECTO,
} from "../types";

const initialState = {
  carta: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NUEVO_PRODUCTO:
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
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

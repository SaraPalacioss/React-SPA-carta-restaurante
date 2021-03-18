import {
    NUEVO_PRODUCTO,
    NUEVO_PRODUCTO_ERROR,
    NUEVO_PRODUCTO_CORRECTO,
} from "../types";

export function nuevoProductoAction(producto) {
    return () => console.log(producto);
};


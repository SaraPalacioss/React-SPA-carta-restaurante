import {
    NUEVO_PRODUCTO,
    NUEVO_PRODUCTO_ERROR,
    NUEVO_PRODUCTO_CORRECTO,
} from "../types";

export function nuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(nuevoProducto());
        try {
            dispatch(nuevoProductoCorrecto(producto));
        } catch(err) {
            dispatch(nuevoProductoError(true));
        };
    };
};

const nuevoProducto = () => ({
    type: NUEVO_PRODUCTO,
    payload: true
});

const nuevoProductoCorrecto = producto => ({
    type: NUEVO_PRODUCTO_CORRECTO,
    payload: producto
});

const nuevoProductoError = estado => ({
    type: NUEVO_PRODUCTO_ERROR,
    payload: estado
});
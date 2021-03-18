import {
    NUEVO_PRODUCTO,
    NUEVO_PRODUCTO_ERROR,
    NUEVO_PRODUCTO_CORRECTO,
} from "../types";
import clienteAxios from '../config/axios';

export function nuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(nuevoProducto());
        try {
            await clienteAxios.post('/carta/nuevo', producto)
            dispatch(nuevoProductoCorrecto(producto));
            console.log(producto)
        } catch(err) {
            console.log(err)
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
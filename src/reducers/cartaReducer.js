import {
    NUEVO_PRODUCTO,
    NUEVO_PRODUCTO_ERROR,
    NUEVO_PRODUCTO_CORRECTO,
} from "../types";

const initialState = {
    carta: [],
    error: false,
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
};
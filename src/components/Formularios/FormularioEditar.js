import React from "react";

const FormularioNuevo = () => {
  return (
    <div>
      <h1>EDITAR PRODUCTO</h1>
      <form>
        <label>Nombre: </label>
        <input type="text" name="nombreProducto" placeholder="Nombre del producto" />
        <label>Precio: </label>
        <input type="number" name="precioProducto" placeholder="Precio del producto" />
        <button type="button">Guardar cambios</button>
      </form>
    </div>
  );
};

export default FormularioNuevo;

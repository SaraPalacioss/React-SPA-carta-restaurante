import React from "react";

const FormularioBorrar = () => {
  return (
    <div>
      <h1>BORRAR PRODUCTO</h1>
      <form>
        <label>Nombre: </label>
        <input type="text" name="nombreProducto" placeholder="Nombre del producto" />
        <label>Precio: </label>
        <input type="number" name="precioProducto" placeholder="Precio del producto" />
        <button type="button">Borrar producto</button>
      </form>
    </div>
  );
};

export default FormularioBorrar;

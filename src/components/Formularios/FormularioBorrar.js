import React from "react";

const FormularioNuevo = () => {
  return (
    <div>
      <h1>BORRAR PRODUCTO</h1>
      <form>
        <label>Nombre: </label>
        <input type="text" name="name" placeholder="Nombre del producto" />
        <label>Precio: </label>
        <input type="number" name="price" placeholder="Precio del producto" />
        <button type="button">Borrar producto</button>
      </form>
    </div>
  );
};

export default FormularioNuevo;

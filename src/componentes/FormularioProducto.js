import React from "react";

function FormularioProducto() {
  return (
    <div className="container mt-3">
      <h1>Formulario Producto</h1>
          <form>
              <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Precio</label>
                  <input type="text" className="form-control"/>
              </div>
              <div class="mb-3">
                  <label for="formFile" class="form-label">Imagen</label>
                  <input class="form-control" type="file" id="formFile" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Selecciona la categoria  </label>
                  <select name="categoria" className="form-select">
                      <option value={"default"}>...</option>
                      <option value={"cosmeticos"}>Cosmeticos</option>
                      <option value={"fragancias"}>Fragancias</option>
                      <option value={"piel"}>Cuidado de la piel</option>
                  </select>
              </div>
              <div className="mb-3">
                  <label className="form-label">Selecciona el empleado</label>
                  <select name="empleado" className="form-select" >
                      <option value={"default"}>...</option>
                      <option value={"1"}>Santigo Ortiz</option>
                      <option value={"2"}>Rosa Hernandez</option>
                      <option value={"3"}>Carlos Fuentes</option>
                  </select>
              </div>
              <button type="submit" className="btn btn-dark">Enviar</button>
          </form>
    </div>
  );
}

export default FormularioProducto;
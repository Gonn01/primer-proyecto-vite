// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext.jsx";
function CreateUserForm() {
  // variable name y funcion para cambiar esa variable
  // inicializada en ''
  const [name, setName] = useState("");

  // variable desc y funcion para cambiar esa variable
  // inicializada en ''
  const [desc, setDescription] = useState("");

  // agarro la funcion createUser de UserContext
  const { createUser } = useContext(UserContext);

  return (
    <div className="fixed right-0 bottom-0 bg-gray-300 p-5 w-60">
      {/* Input para ingresar el nombre de usuario */}
      <input
        className="mx-auto w-52 focus:outline-none"
        placeholder="Nombre de usuario"
        // en el onchange cambio la variable name al value del input
        onChange={(e) => setName(e.target.value)}
        // el valor inicial del input es el valor de name
        value={name}
      ></input>

      {/* textarea para ingresar la descripcion del usuario */}
      <textarea
        className="mx-auto mt-3 w-52 focus:outline-none min-h-20 max-h-20 resize-none"
        placeholder="Escribe la descripcion del usuario"
        // en el onchange cambio la variable desc al value del textarea
        onChange={(e) => setDescription(e.target.value)}
        // el valor inicial del textarea es el valor de desc
        value={desc}
      ></textarea>

      {/* Boton para crear el usuario */}
      <div className="text-center mt-3">
        <div
          className="w-20 mt-3  mx-auto text-center bg-emerald-600 px-2 py-1 rounded hover:bg-emerald-400 text-white cursor-pointer"
          // en el onclick hago un prevent para que haga reload de la paigna y creo el usuario, tambien seteo las variables en '' para que los campos se vacien
          onClick={function (e) {
            e.preventDefault();
            createUser(name, desc);
            setName("");
            setDescription("");
          }}
        >
          Añadir
        </div>
      </div>
    </div>
  );
}

export default CreateUserForm;

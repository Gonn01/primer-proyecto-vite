// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext.jsx";
function CreateUserForm() {
  // variable name y funcion para cambiar esa variable
  // inicializada en ''
  const [name, setName] = useState("");

  // variable desc y funcion para cambiar esa variable
  // inicializada en ''
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");

  // agarro la funcion createUser de UserContext
  const { createUser } = useContext(UserContext);

  return (
    <div className="fixed right-0 bottom-0 bg-gray-300 p-5 w-60">
      {/* Input para ingresar el nombre de usuario */}
      <input
        className="mx-auto w-52 focus:outline-none"
        placeholder="Username"
        // en el onchange cambio la variable name al value del input
        onChange={(e) => setName(e.target.value)}
        // el valor inicial del input es el valor de name
        value={name}
      ></input>

      <input
        className="mx-auto w-52 focus:outline-none mt-1"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        className="mx-auto w-52 focus:outline-none mt-1"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      ></input>
      <input
        className="mx-auto w-52 focus:outline-none mt-1"
        placeholder="Country"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      ></input>
      <input
        className="mx-auto w-52 focus:outline-none mt-1"
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      ></input>

      {/* Boton para crear el usuario */}
      <div className="text-center mt-3">
        <div
          className="w-20 mt-3  mx-auto text-center bg-emerald-600 px-2 py-1 rounded hover:bg-emerald-400 text-white cursor-pointer"
          // en el onclick hago un prevent para que haga reload de la paigna y creo el usuario, tambien seteo las variables en '' para que los campos se vacien
          onClick={function (e) {
            e.preventDefault();
            createUser(name, email, city, country, company);
            setName("");
            setEmail("");
          }}
        >
          Añadir
        </div>
      </div>
    </div>
  );
}

export default CreateUserForm;

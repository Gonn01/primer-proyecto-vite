// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
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
    <div className=" bg-gray-300 p-5 w-60">
      {/* <InputCustom
        placeholder="Username"
        // onChange={setName(e.target.value)}
        value={name}
      /> */}
      <input
        className="mx-auto w-52 focus:outline-none"
        placeholder={"placeholder"}
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <input
        className="mx-auto w-52 focus:outline-none"
        placeholder={"placeholder"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        className="mx-auto w-52 focus:outline-none"
        placeholder={"placeholder"}
        onChange={(e) => setCity(e.target.value)}
        value={city}
      ></input>
      {/* <InputCustom
        placeholder="Email"
        // onChange={setEmail(e.target.value)}
        value={email}
      />
      <InputCustom
        placeholder="City"
        // onChange={setCity(e.target.value)}
        value={city}
      />
      <InputCustom
        placeholder="Country"
        // onChange={setCountry(e.target.value)}
        value={country}
      />
      <InputCustom
        placeholder="Company"
        // onChange={(e) => setCompany(e.target.value)}
        value={company}
      /> */}

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
function InputCustom({ placeholder, onChange, value }) {
  return (
    <input
      className="mx-auto w-52 focus:outline-none"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></input>
  );
}

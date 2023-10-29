import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { FaTimes } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
export function UserCard({ user }) {
  // agarro la funcion deleteUser de UserContext
  const { deleteUser, updateUser } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [borrar, setBorrar] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState(user.address.city);
  const [country, setCountry] = useState(user.address.country);
  const [company, setCompany] = useState(user.company.name);
  // estilo del boton para borrar
  let styleDeleteButton = "bg-red-500 hover:bg-red-400 rounded p-2";
  // estilo del texto de la informacion del usuario
  let styleInfo = "text-white";
  // estilo de las etiquetas
  function chango() {
    updateUser(user._id, name, email, city, country, company);
    setEditing(!isEditing);
  }
  function toggleBorrar() {
    setBorrar(!borrar);
  }
  function Etiqueta({ etiquetas }) {
    let styleEtiquetas = `flex bg-sky-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 w-min-full`;
    const handleMouseEnter = () => {
      setBorrar(true);
    };

    const handleMouseLeave = () => {
      setBorrar(false);
    };
    return etiquetas.map((etiqueta) => (
      <>
        <span
          className={styleEtiquetas}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {etiqueta}
          {borrar ? (
            <span className="flex align-middle">
              <FaTimes />
            </span>
          ) : null}
        </span>
      </>
    ));
  }
  return (
    <div className="bg-gray-700 rounded overflow-hidden shadow-lg flex flex-col w-64 min-w-full overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <div className="w-full text-end">
        <button
          className={styleDeleteButton}
          // en el onclick llamo a deleteUser y le paso la id
          onClick={() => deleteUser(user)}
        >
          <FaTimes color="white" />
        </button>
      </div>
      <div className="w-full text-end">
        <button
          className="bg-green-500"
          // en el onclick llamo a deleteUser y le paso la id
          onClick={() => (isEditing ? chango() : setEditing(!isEditing))}
        >
          {isEditing ? (
            <div className="p-2 rounded">
              <FaCheck color="white" />
            </div>
          ) : (
            <div className="p-2 rounded">
              <FaRegEdit color="white" />
            </div>
          )}
        </button>
      </div>
      <img
        className="border-solid border-2 rounded-full mt-5 border-sky-500 w-64 mx-auto"
        src={user.img}
        alt="a"
      />
      {isEditing ? (
        <>
          <input
            className="px-4 bg-transparent font-bold text-xl capitalize text-green-400 rounded cursor-pointer focus:outline-none "
            placeholder="Nombre de usuario"
            // en el onchange cambio la variable name al value del input

            // el valor inicial del input es el valor de name
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </>
      ) : (
        <div className="px-4 font-bold text-xl capitalize text-white">
          {user.name}
        </div>
      )}
      <div className="p-4 flex flex-col justify-between h-full">
        {isEditing ? (
          <>
            <input
              className="px-4 bg-transparent font-bold text-xl capitalize text-green-400 rounded cursor-pointer focus:outline-none "
              placeholder="Email"
              // en el onchange cambio la variable name al value del input

              // el valor inicial del input es el valor de name
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="px-4 bg-transparent font-bold text-xl capitalize text-green-400 rounded cursor-pointer focus:outline-none "
              placeholder="City"
              // en el onchange cambio la variable name al value del input

              // el valor inicial del input es el valor de name
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input
              className="px-4 bg-transparent font-bold text-xl capitalize text-green-400 rounded cursor-pointer focus:outline-none "
              placeholder="Country"
              // en el onchange cambio la variable name al value del input

              // el valor inicial del input es el valor de name
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></input>
            <input
              className="px-4 bg-transparent font-bold text-xl capitalize text-green-400 rounded cursor-pointer focus:outline-none "
              placeholder="Company"
              // en el onchange cambio la variable name al value del input

              // el valor inicial del input es el valor de name
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          </>
        ) : (
          <>
            {user.email != "" ? (
              <p className={styleInfo}>Email: {user.email}</p>
            ) : null}
            {user.address.city != "" ? (
              <p className={styleInfo}>City: {user.address.city}</p>
            ) : null}
            {user.address.city != "" ? (
              <p className={styleInfo}>Country: {user.address.country}</p>
            ) : null}
            {user.company.name != "" ? (
              <p className={styleInfo}>Company: {user.company.name}</p>
            ) : null}
          </>
        )}

        <div className="mt-3 h-24">
          <p className="mb-2 font-bold text-white">Etiquetas:</p>
          <Etiqueta etiquetas={["Frontend", "Backend", "Fullstack"]} />
        </div>
      </div>
    </div>
  );
}
UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

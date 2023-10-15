import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext.jsx";
import { FaTimes } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
export function UserCard({ user }) {
  // agarro la funcion deleteUser de UserContext
  const { deleteUser, updateUser } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  // estilo del boton para borrar
  let styleDeleteButton = "bg-red-500 hover:bg-red-400 rounded p-2";
  // estilo del texto de la informacion del usuario
  let styleInfo = "text-white";
  // estilo de las etiquetas
  let styleEtiquetas =
    "inline-block bg-sky-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2";
  function chango() {
    updateUser(user, name);
    setEditing(!isEditing);
  }
  return (
    <div className="bg-gray-700 rounded overflow-hidden shadow-lg flex flex-col w-64 min-w-full">
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
        <input
          className="px-4 bg-transparent font-bold text-xl capitalize text-green-400 rounded cursor-pointer focus:outline-none "
          placeholder="Nombre de usuario"
          // en el onchange cambio la variable name al value del input

          // el valor inicial del input es el valor de name
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      ) : (
        <div className="px-4 font-bold text-xl capitalize text-white">
          {user.name}
        </div>
      )}
      <div className="p-4 flex flex-col justify-between h-full">
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
        <div className="mt-3 h-24">
          <p className="mb-2 font-bold text-white">Etiquetas:</p>
          <span className={styleEtiquetas}>#photography</span>
          <span className={styleEtiquetas}>#travel</span>
          <span className={styleEtiquetas}>#winter</span>
        </div>
      </div>
    </div>
  );
}
UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

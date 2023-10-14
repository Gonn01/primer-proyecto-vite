import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext.jsx";
export function UserCard({ user: user }) {
  // agarro la funcion deleteUser de UserContext
  const { deleteUser, updateUser } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  // estilo del boton para borrar
  let styleDeleteButton = "bg-red-500 hover:bg-red-400 rounded text-white w-6";
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
          X
        </button>
      </div>
      <div className="w-full text-end">
        <button
          className="bg-green-500"
          // en el onclick llamo a deleteUser y le paso la id
          onClick={() => (isEditing ? chango() : setEditing(!isEditing))}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <img
        className="border-solid border-2 rounded-full mt-5 border-sky-500 w-64 mx-auto"
        src={user.img}
        alt="a"
      />
      {isEditing ? (
        <input
          className="mx-auto w-52 focus:outline-none"
          placeholder="Nombre de usuario"
          // en el onchange cambio la variable name al value del input

          // el valor inicial del input es el valor de name
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      ) : (
        <div className="font-bold text-xl mb-2 capitalize text-white">
          {user.name}
        </div>
      )}
      <div className="p-4 flex flex-col justify-between h-full">
        <p className={styleInfo}>Email: {user.email}</p>
        <p className={styleInfo}>Ciudad: {user.address.city}</p>
        <p className={styleInfo}>Trabaja en: {user.company.name}</p>
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

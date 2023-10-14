import PropTypes from "prop-types";
import React, { useContext } from "react";
import { UserContext as UserContext } from "./UserContext.jsx";
export function UserCard({ user: user }) {
  // agarro la funcion deleteUser de UserContext
  const { deleteUser } = useContext(UserContext);
  // estilo del boton para borrar
  let styleDeleteButton = "bg-red-500 hover:bg-red-400 rounded text-white w-6";
  // estilo del texto de la informacion del usuario
  let styleInfo = "text-white";
  // estilo de las etiquetas
  let styleEtiquetas =
    "inline-block bg-sky-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2";
  return (
    <div className="bg-gray-700 rounded overflow-hidden shadow-lg flex flex-col w-64 min-w-full">
      <div className="w-full text-end">
        <button
          className={styleDeleteButton}
          // en el onclick llamo a deleteUser y le paso la id
          onClick={() => deleteUser(user.id)}
        >
          X
        </button>
      </div>

      <img
        className="border-solid border-2 rounded-full mt-5 border-sky-500 w-64 mx-auto"
        src={user.img}
        alt="a"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <div className="font-bold text-xl mb-2 capitalize text-white">
          {user.name}
        </div>

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

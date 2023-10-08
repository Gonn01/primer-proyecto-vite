import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
function CreateUserForm() {
  const [name, setName] = useState("");
  const [desc, setDescription] = useState("");
  // del context solo quiero el createTask
  const { createUser } = useContext(UserContext);

  return (
    <div className="fixed right-0 bottom-0 bg-gray-300 p-5 w-60">
      <input
        className="mx-auto w-52 focus:outline-none"
        placeholder="Nombre de usuario"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>

      <textarea
        className="mx-auto mt-3 w-52 focus:outline-none min-h-20 max-h-20 resize-none"
        placeholder="Escribe la descripcion del usuario"
        onChange={(e) => setDescription(e.target.value)}
        value={desc}
      ></textarea>

      <div className="text-center mt-3">
        <div
          className="w-20 mt-3  mx-auto text-center bg-emerald-600 px-2 py-1 rounded hover:bg-emerald-400 text-white cursor-pointer"
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

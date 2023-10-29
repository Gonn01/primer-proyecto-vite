// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { UserCardV2 } from "./UserCardV2.jsx";
import { Popup } from "../Portal.jsx";

function UserList() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // tomo de UserContext la lista de usuarios
  const { userList } = useContext(UserContext);
  // si la lista esta vacia muestro un texto
  if (userList.length === 0) {
    return <div>no hay tareas</div>;
  }
  // si no esta vacia hago un map y por cada item muestro un componente UserCard y le asigno una id
  return (
    <div className="flex flex-wrap bg-gradient-to-b from-[#175264] to bg-orange-200 h-screen pt-20 overflow-y-auto justify-center xl:justify-normal">
      {userList.map((user) => (
        <UserCardV2 user={user} key={user._id} />
      ))}
      <div>
        <button onClick={openPopup}>Abrir Popup</button>
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <div>sadas</div>
        </Popup>
      </div>
    </div>
  );
}
export default UserList;

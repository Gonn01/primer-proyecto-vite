// import { UserCard } from "./UserCard.jsx";
import React, { useContext } from "react";
import { UserContext as UserContext } from "./UserContext.jsx";
import { UserCard } from "./UserCard.jsx";

function UserList() {
  // tomo de UserContext la lista de usuarios
  const { userList } = useContext(UserContext);
  // si la lista esta vacia muestro un texto
  if (userList.length === 0) {
    return <div>no hay tareas</div>;
  }
  // si no esta vacia hago un map y por cada item muestro un componente UserCard y le asigno una id
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 w-4/5 mx-auto ">
      {userList.map((user) => (
        <UserCard user={user} key={user._id} />
      ))}
    </div>
  );
}
export default UserList;

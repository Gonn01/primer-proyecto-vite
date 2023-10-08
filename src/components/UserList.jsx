import { UserCard } from "./UserCard";
import { useContext } from "react";
import { UserContext as UserContext } from "../context/UserContext";

function UserList() {
  const { tasks: userList } = useContext(UserContext);
  if (userList.length === 0) {
    return <div>no hay tareas</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 w-4/5 mx-auto ">
      {userList.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}
export default UserList;

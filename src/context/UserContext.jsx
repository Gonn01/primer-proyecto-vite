import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";
export const UserContext = createContext();
export function UserContextProvider(props) {
  const [usersList, setUsers] = useState([]);
  // cuando TaskContextProvider es creado se activa y a tasks le da el
  // valor de data que esta importado arriba
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let x = data.map((item, index) => ({
          ...item,
          img: `https://robohash.org/${index + 1}.png`, // You can replace this with the actual image URL or logic to generate it
        }));
        setUsers(x);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function CreateUser(userName, desc) {
    //creo un nuevo array y le agrega la task
    let i = usersList.length + 1;
    setUsers([
      ...usersList,
      {
        name: userName,
        id: i,
        body: desc,
        img: `https://robohash.org/${i}.png`,
        email: `${userName}@gmail.com`,
        address: {
          city: "Buenos Aires",
          country: "Argentina",
        },
        company: {
          name: "RTC",
        },
      },
    ]);
  }
  function DeleteUser(id) {
    setUsers(usersList.filter((t) => t.id !== id));
  }
  return (
    <UserContext.Provider
      value={{
        tasks: usersList,
        createUser: CreateUser,
        deleteUser: DeleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
